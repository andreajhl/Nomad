import { StaticImageData } from 'next/image';

export interface ItemCarousel {
  title:       string,
  location:    string,
  description: string,
  services:    string[],
  url:         StaticImageData | string,
};

export interface IconsServices {
  room:       () => JSX.Element,
  coWork:     () => JSX.Element,
  food:       () => JSX.Element,
  activities: () => JSX.Element,
};

export interface IntMessage {
  lineOne:       string,
  lineTwo:       string,
  wordHighlight: string
}
