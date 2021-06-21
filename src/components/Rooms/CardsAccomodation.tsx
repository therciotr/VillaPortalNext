import { Flex, Box, Text, Image } from "@chakra-ui/react";
import Link from 'next/link'
import { base_url } from "../../api";
import { IPropsVilla } from "../../types";


export function CardsAccomodation({ acomodacaos }: IPropsVilla) {
  return (
    <>
    {acomodacaos.map(({ id, Descricao, imagem, slug }) => (
      <Link href={`/acomodacoes/${slug}`} key={id}>
        <Box align="center" bgColor="#F2F2F2" w="80%" mt="20%" borderRadius={10} borderWidth={1} borderColor="#A7A7A7">
          <Flex w={["100%", "100%"]} bgColor="#D7D7D7" borderRadius={10}>
            <Flex w="30%" >
              <Image
                src={`${base_url}${imagem[0].url}`}
                boxSize={["100px", "100%"]}
                objectFit="cover"
                borderTopLeftRadius={10}
                borderBottomLeftRadius={10}
              />
            </Flex>
            <Flex pl={10} pr={10} pt={5} w="70%">
              <Text fontSize={[9, 18]} dangerouslySetInnerHTML={{ __html: Descricao }} noOfLines={4} />
            </Flex>
          </Flex>
        </Box>
      </Link>
    ))}
    </>
    )
  
}
