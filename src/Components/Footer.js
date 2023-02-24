import React from 'react'
import { Box, Stack, VStack, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box  bgColor={"blackAlpha.900"} color={"white"} minH={"48"} px={"16"} py={["16", "8"]}>

        <Stack  direction={["column", "row"]} h={"full"} alignItems={"center"}>

            <VStack w={"full"} alignItems={"center"} mt={"10"}>

                <Text fontWeight={"bold"}>About Us</Text>
                <Text fontSize={"sm"}>Everything about your future trade</Text>
            </VStack>

            {/* <VStack>
                <Avatar boxSize={"28"} mt={["4", "0"]} />
                <Text>Our Founder</Text>
            </VStack> */}

        </Stack>

    </Box>
  )
}

export default Footer