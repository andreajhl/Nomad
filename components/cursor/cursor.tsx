import { useContext, useEffect, useState } from "react";
import { CursorContext } from "../../context/cursorContext";
import { useMousePosition } from "../../hooks/useMouseProsition";

import styles from './styles.module.scss';
import Reservation from "../../public/svg/reservation";

import { RESERVE } from '../../constants/index';

type PropsElement = {
  type: string,
  text: string,
};

const CustomMouse = () => {
  const [style, setStyle] = useState<string>('');

  const { x, y } = useMousePosition();
  const { element }= useContext(CursorContext);

  const definedClass = (value: PropsElement): string => {
    let type: string = value.type.toLowerCase();
    const elements: string[] = ['svg', 'path', 'a'];

    if(type === 'button' && value.text === RESERVE) return 'modifyCursor';
    return elements.includes(type) ? 'expand' : '';
  };

  useEffect(() => {
    setStyle(definedClass(element));
  }, [element]);

  return (
    <div
      className={`${styles.cursor} ${style && styles[style]}`}
      style={{
        left: `${x}px`,
        top: `${y}px`
      }}
    >
      <Reservation />
    </div>
  );
};

export default CustomMouse;
