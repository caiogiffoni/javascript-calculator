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

  const addDigit = (btn: number) => {
    if (Number(display)) {
      setDisplay(`${display}${btn}`);
    } else {
      setDisplay(btn);
    }
    setExpression(`${expression}${btn}`);
    if (expression.split("=").length === 2) {
      setDisplay(btn);
      setExpression(btn.toString());
    }
  };

  const addOperation = (btn: string) => {
    switch (btn) {
      case "AC":
        setDisplay("0");
        setExpression("");
        break;
      case "x":
        setDisplay("x");
        setExpression(`${expression}*`);
        break;
      case "=":
        setDisplay(eval(String(expression)));
        setExpression(`${expression}=${eval(String(expression))}`);
        break;
      default:
        setDisplay(btn);
        setExpression(`${expression}${btn}`);
    }
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
