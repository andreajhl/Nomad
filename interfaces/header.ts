import { Dispatch, SetStateAction } from "react";
import { StaticImageData } from 'next/image';

export type ItemNav = {
  title:           string;
  listExperiment?: string[];
};

export interface Nav {
  list?:     ItemNav[],
  setIsOpen: Dispatch<SetStateAction<boolean>>,
};

export interface ItemHero {
  title: string,
  url:   StaticImageData | string,
};

export interface CardDrawer {
  title:        string,
  price:        number,
  description:  string,
  presentation: string,
  url:          StaticImageData | string,
};

export interface IntDrawer {
  isOpen:      boolean,
  setIsOpen:   Dispatch<SetStateAction<boolean>>,
};

export interface IntHero {
  listHero?:     ItemHero[],
  setIndexSlide: Dispatch<SetStateAction<number>>,
};

export interface Pagination {
  indexSlide:  number,
  listHero?:   ItemHero[],
};
