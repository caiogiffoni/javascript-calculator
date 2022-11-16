import { createContext, useContext, useEffect, useState } from "react";
import { useExpression } from "../expression";

interface IDisplayContext {
  display: any;
  setDisplay: React.Dispatch<React.SetStateAction<string | number>>;
  addDigit: (btn: any) => void;
  addOperation: (btn: any) => void;
}

// criar o context
export const DisplayContext = createContext<IDisplayContext>({
  display: "0",
  setDisplay: () => "0",
  addDigit: (btn) => undefined,
  addOperation: (btn) => undefined,
});

// criar o provider
export const DisplayProvider = ({ children }: any) => {
  const [display, setDisplay] = useState<string | number>("0");
  const { setExpression, expression } = useExpression();

  const addDigit = (btn: string | number) => {
    if (Number(display)) {
      setDisplay(Number(`${display}${btn}`));
    } else {
      setDisplay(btn);
    }
    setExpression(`${expression}${btn}`);
  };

  const addOperation = (btn: string) => {
    setDisplay(btn);
    setExpression(`${expression}${btn}`);
  };

  return (
    <DisplayContext.Provider
      value={{ display, setDisplay, addDigit, addOperation }}
    >
      {children}
    </DisplayContext.Provider>
  );
};

export const useDisplay = () => useContext(DisplayContext);
