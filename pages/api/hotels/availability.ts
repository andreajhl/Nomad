import type { NextApiRequest, NextApiResponse } from 'next';
import { listReserve } from '../../../data';
import { CardDrawer } from '../../../interfaces';

export default (req: NextApiRequest, res: NextApiResponse<CardDrawer[]>) => (
  req.method === 'GET' ? getFooterData(req, res): res.status(400)
);

const getFooterData = async(req: NextApiRequest, res: NextApiResponse<CardDrawer[]>) => (
  res.json(listReserve)
);
