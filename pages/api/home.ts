import type { NextApiRequest, NextApiResponse } from 'next';
import { listCarousel, listHero, message as bannerMessage  } from '../../data';
import { ItemCarousel, ItemHero } from '../../interfaces';

type Data = ItemCarousel[] | ItemHero[] | string;

export default (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if(req.method !== 'GET') return res.status(400);

  const { path } = req.query;

  switch (path) {
    case 'slide':
      return getSlideData(req, res);
    case 'carousel':
      return getCarouselData(req, res);
    case 'message':
      return getMesssageData(req, res);
    default:
      return res.status(400);
  };
};

const getCarouselData = async(req: NextApiRequest, res: NextApiResponse<Data>) => (
  res.json(listCarousel)
);

const getSlideData = async(req: NextApiRequest, res: NextApiResponse<Data>) => (
  res.json(listHero)
);

const getMesssageData = async(req: NextApiRequest, res: NextApiResponse<Data>) => (
  res.json(bannerMessage)
);
