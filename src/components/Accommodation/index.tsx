import {
  Flex,
  Text,
  Box,
  Image,
  SimpleGrid,
  FormControl,
  Button,
  HStack,
} from "@chakra-ui/react";

export default function Accomodation() {
  return (
    <Flex align="center" justify="center" direction="column">
      <Box mt="250">
        <Text
          fontSize="36px"
          color="#FEC200"
          fontFamily="Averia Libre"
          mb="60px"
        >
          A pousada
        </Text>
      </Box>
      <SimpleGrid>
        <HStack>
          <Flex direction="column" align="center" mr="-10" justify="center">
            <Flex
              w="101px"
              h="101px"
              bg="linear-gradient(180deg, rgba(90, 146, 255, 0.87) 0%, #086BB3 100%);"
              borderRadius="30px"
              align="center"
              justify="center"
              mt="100px"
            >
              <Image src="/images/Breakfast.svg" alt="Breakfast" />
            </Flex>
            <Text
              mt="40px"
              color="#8A99A8"
              fontFamily="Averia Libre"
              fontSize="20px"
            >
              Café da manhã grátis.
            </Text>
            <Text w="180px" textAlign="center" color="#CBCDCF">O melhor café da manhã da região</Text>
          </Flex>
          <Flex>
            <Image src="/images/Line.svg" alt="Breakfast" />
          </Flex>
          <Flex direction="column" align="center" mr="-10" justify="center">
          <Flex
            w="139px"
            h="139px"
            bg="linear-gradient(180deg, rgba(255, 219, 90, 0.87) 0%, #DEB72E 100%)"
            borderRadius="30px"
            align="center"
            justify="center"
          >
            <Image src="/images/Wifi.svg" alt="Breakfast" />
          </Flex>
          <Text
              mt="-30px"
              color="#8A99A8"
              fontFamily="Averia Libre"
              fontSize="20px"
            >
              Wifi grátis.
            </Text>
            <Text w="180px" textAlign="center" color="#CBCDCF">O melhor café da manhã da região</Text>
            </Flex>
          <Flex>
            <Image src="/images/Line.svg" alt="Breakfast" />
          </Flex>
          <Flex
            w="101px"
            h="101px"
            bg="linear-gradient(180deg, rgba(90, 146, 255, 0.87) 0%, #086BB3 100%);"
            borderRadius="30px"
            align="center"
            justify="center"
          >
            <Image src="/images/ServiceRoom.svg" alt="Breakfast" />
          </Flex>
        </HStack>
      </SimpleGrid>
    </Flex>
  );
}
