import { useEffect, useState } from "react";

type MouseProsition = {
  x: number,
  y: number,
};

export const useMousePosition = (): MouseProsition => {
  const [mousePosition, setMousePosition] = useState<MouseProsition>({
    x: 0,
    y: 0,
  });

  const mouseMoveHandler = (event: MouseEvent): void => {
    const { clientX, clientY } = event;

    setMousePosition({
      x: clientX,
      y: clientY
    });
  };

  useEffect(() => {
    document.addEventListener("mousemove", mouseMoveHandler);

    return () => document.removeEventListener("mousemove", mouseMoveHandler);
  }, []);

  return mousePosition;
};
