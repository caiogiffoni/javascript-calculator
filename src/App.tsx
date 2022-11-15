import { Box, Button, Text } from "@chakra-ui/react";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { ButtonCalc } from "./components/ButtonCalc";
// import './App.css'

function App() {
  return (
    <Box
      w="100vw"
      h="100vh"
      bgColor="#C2C2D6"
      display="flex"
      justifyContent="center"
      alignItems="center"
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
          >
            <Text>5</Text>
            <Box display="flex" gap="0px" flexWrap="wrap">
              <ButtonCalc w="160px" bgColor="rgb(172, 57, 57)">
                AC
              </ButtonCalc>
              <ButtonCalc bgColor="rgb(102, 102, 102)">/</ButtonCalc>
              <ButtonCalc bgColor="rgb(102, 102, 102)">x</ButtonCalc>
              <ButtonCalc>7</ButtonCalc>
              <ButtonCalc>8</ButtonCalc>
              <ButtonCalc>9</ButtonCalc>
              <ButtonCalc bgColor="rgb(102, 102, 102)">-</ButtonCalc>
              <ButtonCalc>4</ButtonCalc>
              <ButtonCalc>5</ButtonCalc>
              <ButtonCalc>6</ButtonCalc>
              <ButtonCalc bgColor="rgb(102, 102, 102)">+</ButtonCalc>
              <Box display="flex">
                <Box w="75%" display="flex" flexWrap="wrap">
                  <ButtonCalc>1</ButtonCalc>
                  <ButtonCalc>2</ButtonCalc>
                  <ButtonCalc>3</ButtonCalc>
                  <ButtonCalc w="160px">0</ButtonCalc>
                  <ButtonCalc>.</ButtonCalc>
                </Box>
                <Box w="25%">
                  <ButtonCalc bgColor="rgb(0, 68, 102)" h="130px">
                    =
                  </ButtonCalc>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
