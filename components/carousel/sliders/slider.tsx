import { ItemCarousel } from '../../../interfaces';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';
import Card from '../card/card';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

type Props = {
  listItem?: ItemCarousel[],
}

const Slider = ({ listItem }: Props) => (
  <Swiper
    modules={[Pagination, Autoplay]}
    pagination={{ clickable: true }}
    slidesPerView={1.75}
    loop={true}
    autoplay={{ 
      delay: 3500,
      disableOnInteraction: false
    }}
  >
    {
      listItem?.map((e, i) => (
        <SwiperSlide key={e.title}>
          <Card {...e} />
        </SwiperSlide>
      ))
    }
  </Swiper>
);

export default Slider;
