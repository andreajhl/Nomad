import { useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { UseQueryResult, useQuery} from 'react-query';
import { PATH_MESSAGE } from '../../constants';

import Head from 'next/head';
import Footer from '../footer/footer';
import Header from '../header/header';
import Message from '../message/message';
import Carousel from '../carousel/carousel';
import DrawerReserve from '../drawer/drawer';
import CustomMouse from '../cursor/cursor';

import styles from './styles.module.scss';

const HomePage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { data }: UseQueryResult<string> = useQuery<string>('message', () => useFetch(PATH_MESSAGE));

  return (
    <div className={styles.container}>
      <Head>
        <title>Nomad</title>
      </Head>
      <Header setIsOpen={setIsOpen}/>
      {isOpen && <DrawerReserve setIsOpen={setIsOpen} isOpen={isOpen}/>}
      <main className={styles.main}>
        <Message text={data}/>
        <Carousel/>
      </main>
      <footer className={styles.footer}>
        <Footer />
        <div className={styles.message}>{`Gracias por scrollear :)`}</div>
      </footer>
      <CustomMouse/>
    </div>
  );
};

export default HomePage;
