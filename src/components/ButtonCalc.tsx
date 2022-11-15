import { Button } from "@chakra-ui/react";

interface IButtonCalc {
  children: string;
  bgColor?: string;
  w?: string;
  h?: string;
  id?: string;
}

export const ButtonCalc = ({
  children,
  bgColor = "#4d4d4d",
  w = "80px",
  h = "65px",
  id,
}: IButtonCalc) => {
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
    >
      {children}
    </Button>
  );
};
