import { useState, useEffect, ReactElement, ComponentElement } from "react";
import {
  Tab,
  Tabs,
  Button,
  TabList,
  Popover,
  PopoverBody,
  PopoverTrigger,
  PopoverContent,
} from "@chakra-ui/react";
import styles from './styles.module.scss';
import Calendar from "../../public/svg/services/calendar";

import { Nav } from '../../interfaces';
import { RESERVE, EXPERIMENT} from "../../constans";

type Experiences = {
  title: string,
  listExperiment?: string[],
}

const ListExperiences = ({ title, listExperiment }: Experiences) => (
  <Popover>
    <PopoverTrigger>
      <Button>{title}</Button>
    </PopoverTrigger>
    <PopoverContent>
      <PopoverBody>
        {
          listExperiment?.map(e => <p>{e}</p>)
        }
      </PopoverBody>
    </PopoverContent>
  </Popover>
);



const Navbar = ({list, setIsOpen}: Nav) => {
  let scroll = window.pageYOffset;

  const handleClick = (e: string) => e === RESERVE && setIsOpen(true);

  const handleScroll = () => {
    let navbar: HTMLElement | null = document.querySelector('.chakra-tabs ');
    let currentScroll = window.pageYOffset;

    navbar && (navbar.style.top = scroll > currentScroll ? "33px" : "-70px");

    scroll = currentScroll
  }
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () =>  window.removeEventListener('scroll', handleScroll)
  }, []);

  return (
    <Tabs variant='unstyled' className={`${styles.nav}`}>
      <TabList>
        {
          list?.map(({title, listExperiment}) => (
            <Tab key={title} onClick={()=>handleClick(title)} >
              {title === RESERVE && <Calendar />}
              {title === EXPERIMENT ? <ListExperiences title={title} listExperiment={listExperiment}/>  : title}
            </Tab>
          ))
        }
      </TabList>
    </Tabs>
  )
};

export default Navbar;