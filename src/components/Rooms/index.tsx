
import {  Flex, Text, SimpleGrid, Box, Stack } from "@chakra-ui/react";
import React from "react";
import { CardsAccomodation } from "./CardsAccomodation";
import { CarouselComponent } from "./CarouselComponent";

export function Accomodation() {
    
  return (
    <Flex justify="center" mt="24px" direction="column" align="center">
      <Stack spacing="24px" align="center">
      <CardsAccomodation />
      <CardsAccomodation />
      <CardsAccomodation />
      </Stack>
    </Flex>
  );
}
