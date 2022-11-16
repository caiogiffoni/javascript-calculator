import { DisplayProvider } from "./display";
import { ExpressionProvider } from "./expression";

export const Providers = ({ children }: any) => {
  return (
    <ExpressionProvider>
      <DisplayProvider>{children}</DisplayProvider>;
    </ExpressionProvider>
  );
};