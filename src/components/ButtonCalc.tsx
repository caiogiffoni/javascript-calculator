import { Button } from "@chakra-ui/react";

interface IButtonCalc {
  children: string;
  bgColor?: string;
  w?: string;
  h?: string;
}

export const ButtonCalc = ({
  children,
  bgColor = "#4d4d4d",
  w = "80px",
  h = "65px",
}: IButtonCalc) => {
  return (
    <Button
      bgColor={bgColor}
      w={w}
      h={h}
      borderRadius="0px"
      outline="1px solid black"
    >
      {children}
    </Button>
  );
};
