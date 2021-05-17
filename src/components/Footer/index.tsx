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

      <Grid bg="#4E4B4B" width="100%" height="100%" mt="330px">
         <Flex margin="15px" marginTop="150px" marginLeft="60px">
           <Image src="/images/LOGOTIPO VILLA PORTAL- FOOTER.svg" alt="Logo" />
         </Flex>
        
         <Flex marginLeft="60px" marginTop="50px" marginBottom="60px">
           <HStack>

           <Button bg="#F6E05E" height="38px" width="38px" borderRadius="8px">
             <Image src="/images/facebook.svg" alt="Logo" />
           </Button>  

           <Button bg="#F6E05E" height="38px" width="38px" borderRadius="8px">
             <Image src="/images/instagram.svg" alt="Logo" />
           </Button>   

           <Button bg="#F6E05E" height="38px" width="38px" borderRadius="8px">
             <Image src="/images/youtube.svg" alt="Logo" />
           </Button> 
         
           </HStack> 
           </Flex>


           
               <ButtonGroup spacing="6" right="100px" position="absolute" marginTop="170px">
                 <Button colorScheme="#FFFFFF" color="#FFFFFF" variant="link">
                   Termo de uso
                 </Button>

                 <Button colorScheme="#FFFFFF" color="#FFFFFF" variant="link">
                    Direitos autorais
                 </Button>

                 <Button colorScheme="#FFFFFF" color="#FFFFFF" variant="link">
                   Politica de privacidade
                 </Button>
                 </ButtonGroup>
      </Grid>
      
    );
}