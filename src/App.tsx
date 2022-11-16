import { Box, Button, Link, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ButtonCalc } from "./components/ButtonCalc";
import { useDisplay } from "./providers/display";

function App() {
  // const [display, setDisplay] = useState("0");
  const { display } = useDisplay();

  const [exp, setExp] = useState("");

  // useEffect(() => {}, [display]);

  const setAction = () => {};

  return (
    <Box
      w="100vw"
      h="100vh"
      bgColor="#C2C2D6"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Box
        w="320px"
        minH="380.5px"
        bgColor="black"
        p="5px"
        border="2px solid #47476b"
        boxSizing="content-box"
      >
        <Box minH="20px" color="orange" textAlign="right">
          <Text fontFamily="digital" fontSize="20px" h="30px">
            8*8
          </Text>
          <Box
            fontSize="29px"
            textAlign="right"
            color="white"
            lineHeight="35px"
            minH="30px"
          >
            <Text id="display">{display}</Text>
            <Box display="flex" gap="0px" flexWrap="wrap">
              <ButtonCalc w="160px" bgColor="rgb(172, 57, 57)" id="clear">
                AC
              </ButtonCalc>
              <ButtonCalc bgColor="rgb(102, 102, 102)" id="divide">
                /
              </ButtonCalc>
              <ButtonCalc bgColor="rgb(102, 102, 102)" id="multiply">
                x
              </ButtonCalc>
              <ButtonCalc id="seven">7</ButtonCalc>
              <ButtonCalc id="eight">8</ButtonCalc>
              <ButtonCalc id="nine">9</ButtonCalc>
              <ButtonCalc bgColor="rgb(102, 102, 102)" id="subtract">
                -
              </ButtonCalc>
              <ButtonCalc id="four">4</ButtonCalc>
              <ButtonCalc id="five">5</ButtonCalc>
              <ButtonCalc id="six">6</ButtonCalc>
              <ButtonCalc bgColor="rgb(102, 102, 102)" id="add">
                +
              </ButtonCalc>
              <Box display="flex">
                <Box w="75%" display="flex" flexWrap="wrap">
                  <ButtonCalc id="one">1</ButtonCalc>
                  <ButtonCalc id="two">2</ButtonCalc>
                  <ButtonCalc id="three">3</ButtonCalc>
                  <ButtonCalc w="160px" id="zero">
                    0
                  </ButtonCalc>
                  <ButtonCalc id="decimal">.</ButtonCalc>
                </Box>
                <Box w="25%">
                  <ButtonCalc bgColor="rgb(0, 68, 102)" h="130px" id="equals">
                    =
                  </ButtonCalc>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Text mt="12px">Coded by</Text>
      <Text>
        <Link
          href="https://www.linkedin.com/in/caiocgfg"
          color="teal.800"
          _hover={{
            textDecoration: "none",
          }}
        >
          Caio Giffoni
        </Link>
      </Text>
    </Box>
  );
}

export default App;
