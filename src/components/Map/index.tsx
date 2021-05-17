import { AspectRatio, Box, Flex, Grid, Text,Stack } from "@chakra-ui/react";
import React from "react";


export function Map() {
    return(
        
        <Grid 
            mt="30px" 
            content="center" 
            bg="#F6E05E" 
            borderRadius="50px" 
            width="90%" 
            height="400px" 
            align="center" 
            alignContent="center" 
            marginLeft="70px"
            position="absolute"
        >
            <Box 
                width="430px" 
                marginLeft="30px"
            >
            <AspectRatio ratio={4/3}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=POUSADA+VILLA+PORTAL/@-9.0037278,-35.2214226,17z/data=!3m1!4b1!4m8!3m7!1s0x7008bbfa21beb2b:0xe17c9b8db24d35e8!5m2!4m1!1i2!8m2!3d-9.0037278!4d-35.2192339?hl=pt-BR"
                    //  alt="demo"
                />
            </AspectRatio>

            <Grid align="center" marginLeft="470px" position="absolute" mt="-320px" width="10%">
                <Flex align="center">
                    <Stack>
                        <Text color="#FFFFFF" marginBottom="10px" fontSize="4xl">Localização</Text>
                    </Stack>
                </Flex>
            </Grid>

            <Grid align="center" marginLeft="470px" position="absolute" mt="-220px" width="10%">
                <Flex align="center">
                    <Stack>
                        <Text color="#FFFFFF" marginBottom="10px" >Av. Cândido Portinari</Text>
                        <Text color="#FFFFFF">Maragogi - AL</Text>
                        <Text color="#FFFFFF">57955-000</Text>
                    </Stack>
                </Flex>
            </Grid>
            <Box 
                bg="#E3B100" 
                position="absolute" 
                width="1" 
                height="250px" 
                marginLeft="800px" 
                mt="-280px"
            >
                <Text color="#E3B100">.</Text>
            </Box>

            <Grid align="center" right="160px" position="absolute" mt="-320px" width="10%">
                <Flex align="center">
                    <Stack>
                        <Text color="#FFFFFF" marginBottom="10px" fontSize="4xl">Contato</Text>
                    </Stack>
                </Flex>
            </Grid>

            <Grid 
                align="center" 
                right="150px" 
                position="absolute" 
                mt="-220px" 
                width="10%"
            >
                <Flex align="center">
                    <Stack>
                        <Text color="#FFFFFF" marginBottom="10px" >Celular: +55 (82) 988712203</Text>
                        <Text color="#FFFFFF">Fixo: +55 (82) 3333-5555</Text>
                    </Stack>
                </Flex>
            </Grid>
            </Box>
        </Grid>
        
    );
}