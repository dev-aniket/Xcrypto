import { VStack, Box, Spinner } from '@chakra-ui/react'
import React from 'react'

const Loader = () => {
  return (
  <VStack h="90vh" justifyContent={"center"}>
    <Box transform={"scale(3)"}></Box>
    <Spinner size={"xl"}></Spinner>
  </VStack>
  )
}

export default Loader;
