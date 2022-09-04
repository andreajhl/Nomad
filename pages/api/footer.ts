import type { NextApiRequest, NextApiResponse } from 'next';
import { footer } from '../../data';
import { Footer } from '../../interfaces';

export default (req: NextApiRequest, res: NextApiResponse<Footer>) => (
  req.method === 'GET' ? getFooterData(req, res): res.status(400)
);

const getFooterData = async(req: NextApiRequest, res: NextApiResponse<Footer>) => (
  res.json(footer)
);
