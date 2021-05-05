import {
    Flex,
    Text,
    Box,
    Button,
  } from "@chakra-ui/react";

  export function MenuItens() {
      return(
          <Flex mt="20px" zIndex="2" position="relative" top="-537px">
              <Flex>
                <Button variant="link" color="#FFFFFF" marginRight="0.5rem" justify="center" align="center" ml="50px" spacing="6" left="620px">Inicio</Button>
              </Flex>

              <Flex>
              <Button variant="link" color="#FFFFFF" marginRight="0.5rem" justify="center" align="center" ml="50px" spacing="6" left="620px">Acomodações</Button>
              </Flex>

              <Flex>
              <Button variant="link" color="#FFFFFF" marginRight="0.5rem" justify="center" align="center" ml="50px" spacing="6" left="620px">Maragogi</Button>
              </Flex>

              <Flex>
              <Button variant="link" color="#FFFFFF" marginRight="0.5rem" justify="center" align="center" ml="50px" spacing="6" left="620px">Politica de reservas</Button>
              </Flex>
          </Flex>
      );
  }