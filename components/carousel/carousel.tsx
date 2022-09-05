import { useFetch } from '../../hooks/useFetch';
import { UseQueryResult, useQuery} from 'react-query';
import { ItemCarousel } from '../../interfaces';
import { PATH_CAROUSEL } from '../../constants';

import styles from './styles.module.scss';
import Slider from './sliders/slider';

const Carousel = () => {
  const { data }: UseQueryResult<ItemCarousel[]> = useQuery<ItemCarousel[]>('carousel', () => useFetch(PATH_CAROUSEL));

  return (
    <div className={styles.container}>
      <div className={styles.containerText}>
        <h2>Hoteles que son hogares</h2>
        <p>Siéntete parte de la tribu en un ambiente diseñado para que experimentes el viaje que va a cambiar algo en ti.</p>
      </div>
      <div className={styles.containerCarousel}>
        <Slider listItem={data}/>
      </div>
    </div>
  );
};

export default Carousel;
