import { ItemCarousel, ItemHero, CardDrawer } from '../interfaces';

export const listCarousel: ItemCarousel[] = [
  {
    url: '/images/slide1.png',
    title: 'URBAN',
    location: 'Arequipa',
    description: 'Hub de exploradores, artistas y profecionales que ven al mundo su verdadero hogar.',
    services: ['room', 'activities', 'coWork'],
  },
  {
    url: '/images/slide2.png',
    title: 'Tribe',
    location: 'Arequipa',
    description: 'Hub de exploradores, artistas y profecionales que ven al mundo su verdadero hogar.',
    services: ['room', 'food', 'activities'] ,
  },
  {
    url: '/images/slide3.png',
    title: 'Family',
    location: 'Arequipa',
    description: 'Hub de exploradores, artistas y profecionales que ven al mundo su verdadero hogar.',
    services: ['room', 'activities'],
  },
];

export const listReserve: CardDrawer[] = [
  {
    url: '/images/drawer1.png',
    title: 'URBAN',
    price: 4560,
    description: 'Habitaciones VIP · Piscina Climatizada · Salón de eventos · Espacio Coworking · Wifi gratís',
    presentation: 'Social hub de alta experiencia, para millennials y zetas ejecutivos.',
  },
  {
    url: '/images/drawer2.png',
    title: 'Tribe',
    price: 3190,
    description: 'Habitaciones VIP · Piscina · Gastronomía Vegana · Wifi gratís',
    presentation: 'Exploradores, artistas y emprendedores juntos en un lugar único.',
  },
  {
    url: '/images/drawer3.png',
    title: 'Family',
    price: 4560,
    description: 'Habitaciones VIP · Piscina Climatizada · Actividades · Spa · Cancha de golf · Wifi gratís',
    presentation: 'Vive junto a toda tu familia a mejor experiencia de sus vidas.',
  },
];

export const listHero: ItemHero[] = [
  {
    title: 'Concepto Co-living',
    url: '/images/hero1.png',
  },
  {
    title: 'Experiencias únicas',
    url: '/images/hero2.png',
  },
  {
    title: 'Gastronomía multi-formato',
    url: '/images/hero3.png',
  },
];

export const message: string = 'Un hogar con espacio para coworkear, conectarte con aventuras locales y personas increíbles.';
