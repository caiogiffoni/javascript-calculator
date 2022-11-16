import { createContext, useContext, useEffect, useState } from "react";
import { useDisplay } from "../display";

interface IExpressionContext {
  expression: string | number;
  setExpression: React.Dispatch<React.SetStateAction<string | number>>;
}

// criar o context
export const ExpressionContext = createContext<IExpressionContext>({
  expression: 0,
  setExpression: () => undefined,
});

// criar o provider
export const ExpressionProvider = ({ children }: any) => {
  const [expression, setExpression] = useState<string | number>("");
  // const { display } = useDisplay();

  // useEffect(() => {
  //   console.log(display);
  //   setExpression(display);
  // }, [display]);

  return (
    <ExpressionContext.Provider value={{ expression, setExpression }}>
      {children}
    </ExpressionContext.Provider>
  );
};

export const useExpression = () => useContext(ExpressionContext);
