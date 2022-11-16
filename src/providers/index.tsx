import { DisplayProvider } from "./display";
import { ExpressionProvider } from "./expression";

export const Providers = ({ children }: any) => {
  return (
    <ExpressionProvider>
      <DisplayProvider>{children}</DisplayProvider>;
    </ExpressionProvider>
  );
};

{
  /* <DisplayProvider>
<ExpressionProvider>{children}</ExpressionProvider>;
</DisplayProvider> */
}

{
  /* <ExpressionProvider>
<DisplayProvider>{children}</DisplayProvider>;
</ExpressionProvider> */
}
