import { Box, Button, Link, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ButtonDot } from "./components/ButtonDot";
import { ButtonNumbers } from "./components/ButtonNumbers";
import { ButtonOperation } from "./components/ButtonOperation";
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
              <ButtonNumbers w="160px" bgColor="rgb(172, 57, 57)" id="clear">
                AC
              </ButtonNumbers>
              <ButtonOperation bgColor="rgb(102, 102, 102)" id="divide">
                /
              </ButtonOperation>
              <ButtonOperation bgColor="rgb(102, 102, 102)" id="multiply">
                x
              </ButtonOperation>
              <ButtonNumbers id="seven">7</ButtonNumbers>
              <ButtonNumbers id="eight">8</ButtonNumbers>
              <ButtonNumbers id="nine">9</ButtonNumbers>
              <ButtonOperation bgColor="rgb(102, 102, 102)" id="subtract">
                -
              </ButtonOperation>
              <ButtonNumbers id="four">4</ButtonNumbers>
              <ButtonNumbers id="five">5</ButtonNumbers>
              <ButtonNumbers id="six">6</ButtonNumbers>
              <ButtonOperation bgColor="rgb(102, 102, 102)" id="add">
                +
              </ButtonOperation>
              <Box display="flex">
                <Box w="75%" display="flex" flexWrap="wrap">
                  <ButtonNumbers id="one">1</ButtonNumbers>
                  <ButtonNumbers id="two">2</ButtonNumbers>
                  <ButtonNumbers id="three">3</ButtonNumbers>
                  <ButtonNumbers w="160px" id="zero">
                    0
                  </ButtonNumbers>
                  <ButtonDot id="decimal">.</ButtonDot>
                </Box>
                <Box w="25%">
                  <ButtonOperation
                    bgColor="rgb(0, 68, 102)"
                    h="130px"
                    id="equals"
                  >
                    =
                  </ButtonOperation>
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
