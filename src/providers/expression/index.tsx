import { createContext, useContext, useEffect, useState } from "react";
import { useDisplay } from "../display";

interface IExpressionContext {
  expression: string;
  setExpression: React.Dispatch<React.SetStateAction<string>>;
}

// criar o context
export const ExpressionContext = createContext<IExpressionContext>({
  expression: "",
  setExpression: () => undefined,
});

// criar o provider
export const ExpressionProvider = ({ children }: any) => {
  const [expression, setExpression] = useState<string>("");

  return (
    <ExpressionContext.Provider value={{ expression, setExpression }}>
      {children}
    </ExpressionContext.Provider>
  );
};

export const useExpression = () => useContext(ExpressionContext);
