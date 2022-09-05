import { Dispatch, SetStateAction, useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useFetch } from '../../hooks/useFetch';
import { UseQueryResult, useQuery} from 'react-query';
import { ItemHero, ItemNav } from '../../interfaces';
import { PATH_NAV, PATH_SLIDE } from '../../constants';

import styles from './styles.module.scss';
import Hero from '../hero/hero';
import logo from '../../public/images/logo.png';
import Pagination from '../pagination/pagination';

const Navbar = dynamic(() => import("../nav/nav"), {ssr: false});

const Header = ({setIsOpen}:{setIsOpen:Dispatch<SetStateAction<boolean>>}) => {
  const [indexSlide, setIndexSlide] = useState<number>(0);

  const { data: list }: UseQueryResult<ItemNav[]> = useQuery<ItemNav[]>('list', () => useFetch(PATH_NAV));
  const { data: listHero}: UseQueryResult<ItemHero[]> = useQuery<ItemHero[]>('listHero', () => useFetch(PATH_SLIDE));

  const configLogo = {
    src: logo,
    width: 142,
    height: 64,
    alt:"Logo Nomad",
  };

  return (
    <header className={styles.header}>
      <div className={styles.hero}>
        <Hero listHero={listHero} setIndexSlide={setIndexSlide} />
        <Pagination listHero={listHero} indexSlide={indexSlide}/>
      </div>
      <div className={styles.navbar}>
          <Image {...configLogo}/>
          <Navbar list={list} setIsOpen={setIsOpen}/>
        </div>
      <div className={styles.content}>
        <h1>Tu tribu te espera</h1>
      </div>
    </header>
  );
};

export default Header;
