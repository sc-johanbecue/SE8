import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { firstname, name, email, persona, operator } = req.body;

  const MailingListID = '9f03e75a-d064-4be9-ae6c-a111eb7d1630'; // replace with real ID
  const aK = '45f4a1f4-d407-42d9-9aba-47751f3cd788'; //'2565bc11-c6e6-4ec3-85f7-64a6f9e4fdde'; // replace with real key

  const payload = {
    Firstname: firstname,
    Name: name,
    Email: email,
    HasExternalDoubleOptIn: false,
    CustomFields: [`Persona=${persona}`, `Operator=${operator}`],
  };

  try {
    console.log('subscribe.ts - start try');
    // const response = await fetch(`https://sitecore.requestcatcher.com/test`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(payload),
    // });

    const response = await fetch(
      `https://sitecoresendemo.sitecoresend.io/v3/subscribers/${MailingListID}/subscribe.json?apikey=${aK}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      }
    );

    const result = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({ error: result });
    }
    console.log('subscribe.ts - after try');
    return res.status(200).json({ success: true, data: result });
  } catch (err) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
