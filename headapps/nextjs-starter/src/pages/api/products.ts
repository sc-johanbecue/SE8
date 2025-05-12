import type { NextApiRequest, NextApiResponse } from 'next';
import http from 'http';

interface Product {
  item_id: string;
  item_name: string;
  brand_descr: string;
  description?: string;
  category_descr: string;
  group_descr: string;
  subgroup_descr: string;
  price?: number;
  title: string;
  image_link: string;
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const url = 'http://maf-holding-sandbox.apigee.net/cs/poc/lftl_items';

  // Optional query param: ?brand_descr=Nike
  const brandFilter = req.query.brand_descr?.toString().toLowerCase();

  http
    .get(url, (response) => {
      let data = '';

      response.on('data', (chunk) => {
        data += chunk;
      });

      response.on('end', () => {
        try {
          const json = JSON.parse(data);

          // Normalize response to array
          const items: Product[] = Array.isArray(json.items)
            ? json.items
            : Array.isArray(json)
            ? json
            : [];

          // Filter only if brand_descr is specified
          const filteredItems = brandFilter
            ? items.filter((item) => item.brand_descr?.toString().toLowerCase() === brandFilter)
            : items;

          res.status(200).json(filteredItems);
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
