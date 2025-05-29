import { createContext, ReactNode, SetStateAction, useContext, useState } from 'react';

type ModalNavContextType = {
  currentContent: JSX.Element;
  isOpen: boolean;
  pushContent: (node: SetStateAction<JSX.Element>) => void;
  setIsOpen: (open: boolean) => void;
  open: (node: SetStateAction<JSX.Element>) => void;
};

const ModalNavContext = createContext<ModalNavContextType>({
  currentContent: <></>,
  isOpen: true,
  pushContent: (_: SetStateAction<JSX.Element>) => {},
  setIsOpen: (_) => {},
  open: (_: SetStateAction<JSX.Element>) => {},
});

export const ModalNavProvider = ({ children }: { children: ReactNode }) => {
  const [currentContent, pushContent] = useState(<></>);
  const [isOpen, setIsOpen] = useState(false);

  const open = (node: SetStateAction<JSX.Element>) => {
    pushContent(node);
    setIsOpen(true);
  };

  return (
    <ModalNavContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        currentContent,
        pushContent,
        isOpen,
        setIsOpen,
        open,
      }}
    >
      {children}
    </ModalNavContext.Provider>
  );
};

const useModal = () => useContext(ModalNavContext);

// eslint-disable-next-line react-refresh/only-export-components
export default useModal;
