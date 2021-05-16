import React from 'react';
import { Flex, Box, Grid, Text } from "@chakra-ui/react";

export default function AllRights() {
    return(
        <Grid direction="column" align="center" bg="#292929">
            
            <Text 
            color="#FFFFFF" 
            align="right" 
            margin="5px"
            position="relative"
            right="100px"
            > 
                © Todos os direitos reservados - 2021 
            </Text>

            <Text 
            color="#FFFFFF" 
            align="left" 
            position="absolute"
            margin="5px"
            left="50px"
            > 
                Desenvolvido por TR Tecnologias 
            </Text>
            
        </Grid>
    );
}