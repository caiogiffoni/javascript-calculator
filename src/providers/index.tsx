import { DisplayProvider } from "./display";
import { ExpressionProvider } from "./expression";

export const Providers = ({ children }: any) => {
  return (
    <DisplayProvider>
      <ExpressionProvider>{children}</ExpressionProvider>;
    </DisplayProvider>
  );
};
