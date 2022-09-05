import Image from 'next/image';
import { IntHero } from '../../interfaces/header';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

const Hero = ({ listHero, setIndexSlide }: IntHero) => (
  <Swiper
    modules={[Pagination, Autoplay]}
    pagination={{ clickable: true }}
    slidesPerView={1}
    loop={true}
    autoplay={{ 
      delay: 5000,
      disableOnInteraction: false
    }}
    onSlideChange={(e) => setIndexSlide(e.realIndex)}
  >
    {
      listHero?.map((e) => (
        <SwiperSlide key={e.title}>
          <Image src={e.url} alt={e.title} layout="responsive" width={1440} height={800}/>
        </SwiperSlide>
      ))
    }
  </Swiper>
);

export default Hero;
