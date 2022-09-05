import { PointerEvent, useContext } from "react";
import { CursorContext } from '../../context/cursorContext';
import { UseQueryResult, useQuery} from 'react-query';
import { useFetch } from '../../hooks/useFetch';
import Image from 'next/image';

import { PATH_FOOTER } from '../../constants';
import { IconsNetWorks, Footer as IntFooter } from '../../interfaces';

import logo from '../../public/images/logo.png';
import Youtube from '../../public/svg/socialNetworks/youtube';
import Twitter from '../../public/svg/socialNetworks/twitter';
import Facebook from '../../public/svg/socialNetworks/facebook';
import Instagram from '../../public/svg/socialNetworks/instagram';
import styles from './styles.module.scss';

const icons: IconsNetWorks = {
  twitter: Twitter,
  youtube:  Youtube,
  facebook:  Facebook,
  instagram: Instagram,
};

const configLogo = {
  src: logo,
  width: 142,
  height: 64,
  alt:"Logo Nomad",
};


export const Footer = () => {
  const { setElement } = useContext(CursorContext);

  const { data }: UseQueryResult<IntFooter> = useQuery<IntFooter>('footer', () => useFetch(PATH_FOOTER));
  const renderIcons = (key: string) => icons[key as keyof IconsNetWorks]();

  const useMouseStyleConfig = ({target, type}: PointerEvent, text: string = '') => {
    let element = target as HTMLElement;
    return type === 'pointerleave' ? setElement({text: '', type: ''}) : setElement({ text, type: element.tagName});
  };

  return (
    <div className={styles.info}>
      <div>
        <Image {...configLogo}/>
        <p>{data?.enterprise?.message}</p>
        <div className={styles.netWorks}>
          {
            data?.enterprise?.socialNetworks.map(element => (
              <a key={element} onPointerEnter={useMouseStyleConfig} onPointerLeave={useMouseStyleConfig}>{renderIcons(element)}</a>
            ))
          }          
        </div>
      </div>
      <div className={styles.contact}>
        <h3>Contacta con nosotros</h3>
        <p>T: {data?.contact?.tlf}</p>
        <p>E: {data?.contact?.email}</p>
      </div>
      <div className={styles.services}>
        {
          data?.services?.map(element => (
            <a key={element} onPointerEnter={useMouseStyleConfig} onPointerLeave={useMouseStyleConfig}>{element}</a>
          ))
        }
      </div>
    </div>
  );
};

export default Footer;
