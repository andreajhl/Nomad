import Image, { ImageLoader } from 'next/image';
import { CardDrawer } from '../../../interfaces';

import styles from './styles.module.scss'

const Card = ({title, url, presentation, description, price}: CardDrawer) => (
  <div className={styles.card}>
    <Image
      src={url}
      alt={title}   
      layout="fixed"
      width={250}
      height={262}
    />
    <div className={styles.cardBody}>
      <h2 className={styles[title.toLowerCase()]}>{title}</h2>
      <p className={styles.presentation}>{presentation}</p>
      <p className={styles.description}>{description}</p>
      <p className={styles.price}>Desde <span>${price}/Noche</span></p>
      <button>Reservar Ahora</button>
    </div>
  </div>
);


export default Card;