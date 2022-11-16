import { Button } from "@chakra-ui/react";
import { useDisplay } from "../providers/display";

interface IButtonOperation {
  children: string;
  bgColor?: string;
  w?: string;
  h?: string;
  id?: string;
}

export const ButtonOperation = ({
  children,
  bgColor = "#4d4d4d",
  w = "80px",
  h = "65px",
  id,
}: IButtonOperation) => {
  const { addOperation } = useDisplay();
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
      onClick={() => addOperation(children)}
    >
      {children}
    </Button>
  );
};
