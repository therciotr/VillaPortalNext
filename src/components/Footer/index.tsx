import {
    Flex,
    Text,
    Box,
    Image,
    SimpleGrid,
    Stack,
    useBreakpointValue,
    HStack,
    Grid,
  } from "@chakra-ui/react";
import React from "react";

import { Button, ButtonGroup } from "@chakra-ui/react"


export default function Footer() {
    return (
      <Flex bg="#4E4B4B" width="100%" height="100%">
        <Flex>
          <Image src="/images/LOGOTIPO VILLA PORTAL- FOOTER.svg" alt="Logo" />
        </Flex>
        <Flex>
        
        <Flex mt="150px">
          <HStack>

          <Button bg="#F6E05E" height="38px" width="38px">
            <Image src="/images/facebook.svg" alt="Logo" />
          </Button>  

          <Button bg="#F6E05E" height="38px" width="38px">
            <Image src="/images/instagram.svg" alt="Logo" />
          </Button>   

          <Button bg="#F6E05E" height="38px" width="38px">
            <Image src="/images/youtube.svg" alt="Logo" />
          </Button> 
         
          </HStack> 
          </Flex>

          <Grid >
          <Stack justifyContent="right" direction="row" spacing={4} align="center">
            <Button colorScheme="#FFFFFF" color="#FFFFFF" variant="link">
              Termo de uso
            </Button>

            <Button colorScheme="#FFFFFF" color="#FFFFFF" variant="link">
               Direitos autorais
            </Button>

            <Button colorScheme="#FFFFFF" color="#FFFFFF" variant="link">
              Politica de privacidade
            </Button>

          </Stack>
          </Grid>

        </Flex>
      </Flex>
    );
}