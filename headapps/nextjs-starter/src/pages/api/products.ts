// pages/api/products.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import http from 'http';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const url = 'http://maf-holding-sandbox.apigee.net/cs/poc/lftl_items';

  http
    .get(url, (response) => {
      let data = '';

      // Accumulate chunks
      response.on('data', (chunk) => {
        data += chunk;
      });

      // On end, return the JSON response
      response.on('end', () => {
        try {
          const json = JSON.parse(data);
          console.log('jbe jso,:', json);
          res.status(200).json(json);
        } catch (error) {
          res.status(500).json({ error: 'Invalid JSON from upstream server' });
        }
      });
    })
    .on('error', () => {
      res.status(500).json({ error: 'Unable to fetch data from HTTP source' });
    });
};

export default handler;
