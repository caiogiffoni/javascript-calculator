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
    if (Number(display) || display.toString().includes(".")) {
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
    const exp = ["+", "x", "*", "/"];
    let slicedExp = expression;
    if (expression.slice(-1) == "-" && btn === "-") return;
    if ((expression === "" || expression.includes("=")) && btn === "=") return;

    if (exp.includes(expression.slice(-1)) && exp.includes(btn)) {
      slicedExp = `${expression.slice(0, -1)}`;
    } else if (
      expression.slice(-1) == "-" &&
      exp.includes(expression.split("").slice(-2)[0]) &&
      exp.includes(btn)
    ) {
      slicedExp = `${expression.slice(0, -2)}`;
    }
    switch (btn) {
      case "AC":
        setDisplay("0");
        setExpression("");
        break;
      case "x":
        setDisplay(btn);
        setExpression(`${slicedExp}*`);
        break;
      case "=":
        setExpression(`${slicedExp}=${eval(String(slicedExp))}`);
        setDisplay(eval(String(slicedExp)));
        break;
      default:
        if (expression.split("=").length === 2) {
          setDisplay(btn);
          setExpression(`${display}${btn}`);
        } else {
          setDisplay(btn);
          setExpression(`${slicedExp}${btn}`);
        }
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
