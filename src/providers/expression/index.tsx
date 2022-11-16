import { createContext, useContext, useEffect, useState } from "react";
import { useDisplay } from "../display";

interface IExpressionContext {
  expression: string;
  setExpression: React.Dispatch<React.SetStateAction<string>>;
}

// criar o context
export const ExpressionContext = createContext<IExpressionContext>({
  expression: "0",
  setExpression: () => undefined,
});

// criar o provider
export const ExpressionProvider = ({ children }: any) => {
  const [expression, setExpression] = useState<string>("0");

  return (
    <ExpressionContext.Provider value={{ expression, setExpression }}>
      {children}
    </ExpressionContext.Provider>
  );
};

export const useExpression = () => useContext(ExpressionContext);
