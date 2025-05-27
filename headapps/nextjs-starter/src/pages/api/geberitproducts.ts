// import type { NextApiRequest, NextApiResponse } from 'next';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   const url =
//     'https://api.stg.mbp.geberit.com/product-data/v3/products/PRO_170102?locale=en-GB&brand=GEBERIT&measurementGroup=SECONDARY';

//   // Optional query param: ?brand_descr=Nike
//   //const brandFilter = req.query.brand_descr?.toString().toLowerCase();

//   try {
//     const response = await fetch(url, {
//       method: 'GET',
//       headers: {
//         'Ocp-Apim-Subscription-Key': process.env.API_KEY!,
//         Authorization: `Bearer ${process.env.AUTH_TOKEN}`,
//       },
//       redirect: 'follow',
//     });

//     if (!response.ok) {
//       return res.status(response.status).json({ error: `API error: ${response.statusText}` });
//     }

//     const data = await response.json(); // or .text() if it's plain text
//     return res.status(200).json(data);
//   } catch (error) {
//     console.error('Fetch error:', error);
//     return res.status(500).json({ error: 'Internal Server Error' });
//   }
// }
