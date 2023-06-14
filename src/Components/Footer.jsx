import { Box, Button, Heading, HStack, Input, Stack,Text, VStack } from '@chakra-ui/react'
import React from 'react'
import {AiOutlineSend} from "react-icons/ai"

const Footer = () => {
  return <Box bgColor={"blackAlpha.900"} minH={"40"} p={"16"} color={"white"}>

    <Stack direction={["column", "row"]}>
        <VStack alignItems={"stretch"} w={"full"} px={"4"}>
            <Heading size="md" textTransform={"uppercase"} textAlign={["center","left"]} >
                Subscribe to get Updates
            </Heading>
            <HStack borderBottom={"2px solid white"} py={"2"}>
                <Input placeholder='Enter Email Here...'
                 border={"none"} borderRadius={"none"} 
                 outline={"none"} focusBorderColor={"none"} />
                <Button p={"0"} 
                 colorScheme={"purple"}
                 variant={"ghost"}
                 borderRadius={"0 20px 20px 0"} >
                    <AiOutlineSend/>
                </Button>
            </HStack>
        </VStack>

        <VStack w={"full"}
         borderLeft={["none", "1px solid white"]}
         borderRight={["none", "1px solid white"]}
        >
            <Heading size={"md"} textTransform={"uppercase"} textAlign={"center"}>
                VIDEO HUB
            </Heading>
            <Text>All Rights Received</Text>

        </VStack>

        <VStack w={"full"}>
            <Heading size={"md"} textTransform={"uppercase"} >
                Social Media
            </Heading>
            <Button variant={"link"} colorScheme={"whiteAlpha"}>
                <a href="http://youtube.com">YouTube</a>
            </Button>

            <Button variant={"link"} colorScheme={"whiteAlpha"}>
                <a href="https://www.instagram.com/hansraj_dude/">InstaGram</a>
            </Button>

            <Button variant={"link"} colorScheme={"whiteAlpha"}>
                <a href="https://github.com/hansrajparmar">GitHub</a>
            </Button>

        </VStack>

    </Stack>

  </Box>
   
  
}

export default Footer