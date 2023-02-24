import React from 'react';
import {Box, Image, Text} from "@chakra-ui/react";
import img from "../assets/btc.png"

const Home = () => {
  return (
   <Box bgColor={"blackAlpha.900"} w={"full"} h={"85vh"}>
    <Image w={"full"} h={"full"} objectFit={"contain"} src={img}/>

    <Text fontSize={"6xl"} textAlign={"center"} color={"whiteAlpha.700"} fontWeight={"thin"}  mt={"-20"} filter={"grayscale(1)"}>xCrypto</Text>
   </Box>
  )
}

export default Home
