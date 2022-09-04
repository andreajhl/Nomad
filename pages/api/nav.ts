import type { NextApiRequest, NextApiResponse } from 'next';
import { list } from '../../data';
import { ItemNav } from '../../interfaces';

export default (req: NextApiRequest, res: NextApiResponse<ItemNav[]>) => (
  req.method === 'GET' ? getNavbarData(req, res): res.status(400)
);

const getNavbarData = async(req: NextApiRequest, res: NextApiResponse<ItemNav[]>) => (
  res.json(list)
);
