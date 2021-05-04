import {
  Flex,
  Text,
  Box,
  Image,
  SimpleGrid,
  FormControl,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";

export default function Header() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <Flex direction="column" h="100vh">
      <SimpleGrid spacing="1" width="100%">
        <Flex direction="column">

            <Flex ml="90px" mt="52px">
              <img src="/images/Logo.svg" alt="Logo" />
            </Flex>
        

          <Box
            w="447px"
            ml="90px"
            mt="90px"
            color="#330098"
            fontFamily="heading"
            fontSize="36"
            fontWeight="bold"
          >
            <Text>Ainda não conhece nossa pousada?</Text>
          </Box>
          <Box
            w="447px"
            ml="90px"
            mt="18px"
            color="#704ABA"
            fontFamily="heading"
            fontSize="18"
            fontWeight="bold"
          >
            <Text>Não perde tempo, vem agora conhecer!</Text>
          </Box>

          <Button
            ml="90px"
            mt="40px"
            bg="#FEC200"
            w="357px"
            h="62px"
            justify="center"
            align="center"
            pt="15px"
            pb="15px"
            borderRadius="20px"
            boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25);"
          >
            <Image src="/images/Meet.svg" alt="Meet" h="29px" w="20px" />
            <Text
              fontFamily="heading"
              fontWeight="bold"
              ml="16px"
              fontSize="24px"
              color="#FFFFFF"
            >
              Quero conhecer
            </Text>
          </Button>
        </Flex>
        {isWideVersion && (
        <Box position="absolute" top={0} right={0}>
          <Image src="/images/ImageHeader.png" alt="Image Header" />
        </Box>
        )}
      </SimpleGrid>
    </Flex>
  );
}
