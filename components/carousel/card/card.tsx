import React, { useState } from 'react';
import { ItemCarousel, IconsServices } from '../../../interfaces';

import Image from 'next/image';
import LocationPoint from '../../../public/svg/locationPoint';
import Activities from '../../../public/svg/services/activities';
import CoWork from '../../../public/svg/services/coWork';
import Food from '../../../public/svg/services/food';
import Room from '../../../public/svg/services/room';

import styles from './styles.module.scss';

const Card = ({
  url,
  title,
  services,
  location,
  description,
}: ItemCarousel ) => {
  const [expand, setExpand] = useState(false);

  const classCard = title.toLowerCase();
  const icons: IconsServices = {
    room: Room,
    coWork: CoWork,
    food: Food,
    activities: Activities
  };

  const renderIcons = (key: string) => icons[key as keyof IconsServices]()

  return (
    <div className={`${styles.card} ${expand ? styles.visibleInfo : styles.hiddenInfo}`}>
      <Image
        src={url}
        alt={title}
        layout="fixed"
        width={624}
        height={432}
        className={styles.image}
      />
      <div className={`${styles.information} ${styles[classCard]}`} onClick={()=>setExpand(!expand)}>
        <p>
          <LocationPoint />
          {location}
        </p>
        <h4>{title}</h4>
        <div className={styles.completeInformation}>
          <p>{description}</p>
          <footer>
            <p>Servicios de este hotel</p>
            <div className={styles.services}>
              {
                services.map(e => renderIcons(e as string))
              }              
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
};

export default Card;
