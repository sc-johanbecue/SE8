import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { firstname, name, email, persona, operator } = req.body;

  //   const MailingListID = 'your-mailing-list-id'; // replace with real ID
  //   const aK = '2565bc11-c6e6-4ec3-85f7-64a6f9e4fdde'; // replace with real key

  const payload = {
    Firstname: firstname,
    Name: name,
    Email: email,
    HasExternalDoubleOptIn: false,
    CustomFields: [`Persona=${persona}`, `Operator=${operator}`],
  };

  try {
    console.log('subscribe.ts - start try');
    //`https://demoaccount2023.sitecoresend.io/v3/subscribers/${MailingListID}/subscribe.json?apikey=${aK}`
    const response = await fetch(`https://sitecore.requestcatcher.com/test`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

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
