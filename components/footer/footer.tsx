import Image from 'next/image';
import { IconsNetWorks, Footer as IntFooter } from '../../interfaces';
import { useFetch } from '../../hooks/useFetch';
import { UseQueryResult, useQuery} from 'react-query';
import { PATH_FOOTER } from '../../constants';

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
  const { data }: UseQueryResult<IntFooter> = useQuery<IntFooter>('footer', () => useFetch(PATH_FOOTER));
  const renderIcons = (key: string) => icons[key as keyof IconsNetWorks]();

  return (
    <div className={styles.info}>
      <div>
        <Image {...configLogo}/>
        <p>{data?.enterprise?.message}</p>
        <div className={styles.netWorks}>
          {
            data?.enterprise?.socialNetworks.map(e => renderIcons(e))
          }          
        </div>
      </div>
      <div className={styles.contact}>
        <h3>Contacta con nosotros</h3>
        <p>T: {data?.contact?.tlf}</p>
        <p>E: {data?.contact?.email}</p>
      </div>
      <div>
        {
          data?.services?.map(e=> <p key={e}>{e}</p>)
        }
      </div>
    </div>
  )
};

export default Footer;
