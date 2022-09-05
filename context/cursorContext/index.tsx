import { createContext, useState, FC, Dispatch, SetStateAction, ReactChild } from 'react';

type PropsElement = {
  type: string,
  text: string,
};

interface ContextProps {
  element: PropsElement,
  setElement: Dispatch<SetStateAction<PropsElement>>,
};

export const CursorContext = createContext({} as ContextProps);
const { Provider } = CursorContext;

export const CursorProvider = ({ children }: { children: ReactChild}) => {
  const [element, setElement] = useState({
    type: '',
    text: '',
  });

  return (
    <Provider 
      value={{
        element,
        setElement
      }}
    >
      { children }
    </Provider>
  );
};
