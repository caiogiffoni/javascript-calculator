import { Button } from "@chakra-ui/react";
import { useDisplay } from "../providers/display";
import { useExpression } from "../providers/expression";

interface IButtonDot {
  children: string;
  bgColor?: string;
  w?: string;
  h?: string;
  id?: string;
}

export const ButtonDot = ({
  children,
  bgColor = "#4d4d4d",
  w = "80px",
  h = "65px",
  id,
}: IButtonDot) => {
  const { display, setDisplay } = useDisplay();
  const { setExpression, expression } = useExpression();

  const action = (btn: string) => {
    if (display.toString().split(".").length === 1) {
      setDisplay(`${display}${btn}`);
      setExpression(`${expression}${btn}`);
    }
  };
  return (
    <Button
      id={id}
      bgColor={bgColor}
      w={w}
      h={h}
      borderRadius="0px"
      outline="1px solid black"
      _hover={{
        cursor: "default",
        color: "black",
        outline: "0.05em solid grey",
        zIndex: "3",
      }}
      onClick={() => action(children)}
    >
      {children}
    </Button>
  );
};
