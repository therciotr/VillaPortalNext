
import {  Flex, Text, SimpleGrid, Box, Stack } from "@chakra-ui/react";
import React from "react";
import { IPropsVilla } from "../../types";
import { ButtonSeeMore } from "./ButtonSeeMore";
import { CardsAccomodation } from "./CardsAccomodation";



export function AccomodationInitial({ acomodacaosLimited, seemore}: IPropsVilla ) {

  return (
    <Flex justify="center" mt="24px" direction="column" align="center">
      
      <Stack spacing="24px" align="center">
      <Text
              fontSize={["", "36px"]}
              color="#FEC200"
              fontFamily="Averia Libre"
              mb={["10px","40px"]}
              mt="40px"
            >
              Acomodações
            </Text>
      <CardsAccomodation  acomodacaosLimited={acomodacaosLimited}/>
      <Flex mt={10}>
        {!seemore && (
          <ButtonSeeMore />
        )}
      
      </Flex>
      
      </Stack>
    </Flex>
  );
}
