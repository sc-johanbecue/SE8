import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { url: externalUrl, region, ship, operator, starts_after } = req.query;
    if (!externalUrl || typeof externalUrl !== 'string') {
      return res.status(400).json({ message: 'External URL is required' });
    }

    // Build the external API URL with query parameters
    const url = new URL(externalUrl);
    if (region) url.searchParams.set('region', region as string);
    if (ship) url.searchParams.set('ship', ship as string);
    if (operator) url.searchParams.set('operator', operator as string);
    if (starts_after) url.searchParams.set('starts_after', starts_after as string);

    const response = await fetch(url.toString());
    if (!response.ok) {
      throw new Error(`External API responded with status: ${response.status}`);
    }

    const data = await response.json();
    // Set CORS headers for the Next.js API route
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching cruises:', error);
    res.status(500).json({ message: 'Failed to fetch cruises data' });
  }
}
