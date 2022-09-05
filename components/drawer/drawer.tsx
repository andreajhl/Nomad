import { useQuery } from 'react-query';
import { useState, useEffect } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { IntDrawer, CardDrawer } from '../../interfaces';
import { PATH_RESERVE } from '../../constants';
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react';
import Card from './card/card';

import styles from './styles.module.scss';

const DrawerReserve = ({isOpen, setIsOpen }: IntDrawer) => {
  const [list, setList] = useState<CardDrawer[] | [] >([]);
  
  const { data } = useQuery<CardDrawer[]>("listReserve", () => useFetch(PATH_RESERVE));

  useEffect(() => {
    if(isOpen) setList(data?? []);
  }, [data]);

  return (
    <Drawer
      size='lg'
      isOpen={isOpen}
      placement='right'
      onClose={() => setIsOpen(false)}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>
          <h2 className={styles.title}>Reservar</h2>
        </DrawerHeader>
        <DrawerBody>
          {
            list?.map(e => <Card {...e} key={e.title}/>)
          }
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerReserve;
