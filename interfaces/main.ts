import { StaticImageData } from 'next/image';
import { ReactElement } from 'react';

export interface ItemCarousel {
  title:       string,
  location:    string,
  description: string,
  services:    string[],
  url:         StaticImageData | string,
};

export interface IconsServices {
  room:       ReactElement,
  coWork:     ReactElement,
  food:       ReactElement,
  activities: ReactElement,
};

export interface IntMessage {
  lineOne:       string,
  lineTwo:       string,
  wordHighlight: string
}
