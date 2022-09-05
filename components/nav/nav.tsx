import { PointerEvent, useContext, useEffect } from "react";
import { CursorContext } from '../../context/cursorContext';
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
import { RESERVE, EXPERIMENT} from "../../constants";

type Experiences = {
  title: string,
  listExperiment?: string[],
};

const ListExperiences = ({ title, listExperiment }: Experiences) => (
  <Popover>
    <PopoverTrigger>
      <Button>{title}</Button>
    </PopoverTrigger>
    <PopoverContent>
      <PopoverBody>
        {
          listExperiment?.map(e => <p key={e}>{e}</p>)
        }
      </PopoverBody>
    </PopoverContent>
  </Popover>
);


const Navbar = ({list, setIsOpen}: Nav) => {
  const { setElement } = useContext(CursorContext);
  let scroll = window.pageYOffset;

  const handleClick = (e: string) => e === RESERVE && setIsOpen(true);

  const handleScroll = () => {
    let navbar: HTMLElement | null = document.querySelector('.chakra-tabs ');
    let currentScroll = window.pageYOffset;

    navbar && (navbar.style.top = scroll > currentScroll ? "33px" : "-70px");

    scroll = currentScroll;
  }

  const useMouseStyleConfig = ({target, type}: PointerEvent, text: string) => {
    let element = target as HTMLElement;
    return type === 'pointerleave' ? setElement({text: '', type: ''}) : setElement({ text, type: element.tagName})
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () =>  window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Tabs variant='unstyled' className={`${styles.nav}`}>
      <TabList>
        {
          list?.map(({title, listExperiment}) => (
            <Tab
              key={title}
              onClick={()=>handleClick(title)}
              onPointerEnter={(e) => useMouseStyleConfig(e, title)}
              onPointerLeave={(e) => useMouseStyleConfig(e, title)}
            >
              {title === RESERVE && <Calendar />}
              {title === EXPERIMENT ? <ListExperiences title={title} listExperiment={listExperiment}/>  : title}
            </Tab>
          ))
        }
      </TabList>
    </Tabs>
  );
};

export default Navbar;
