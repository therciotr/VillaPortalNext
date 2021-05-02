import { Children, CSSProperties } from "react";
import { Box, SimpleGrid, Image, Flex, Stack, Container, VStack, Text, Button, ButtonGroup } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";

import More from '../../pages/seeMore/[slug]';


type More = {
  title: string;
}

type HomeProps = {

  allRooms: More[];  

}

export default function CarouselComponentRooms() {

    const indicatorStyles: CSSProperties = {
        background: "#F1FFFC",
        width: 12,
        height: 12,
        borderRadius: 8,
        display: "inline-block",
        alignItems: "center",
        alignContent:"center",
        margin: "0px 8px 1px 10px",
        // marginLeft: "100px"
      };
      const arrowStyles: CSSProperties = {
        position: "absolute",
        zIndex: 2,
        top: "calc(50% - 15px)",
        width: 30,
        height: 30,
        cursor: "pointer",
        
      };

      return(

        <VStack alignContent="left" >
        <Container maxW="container.xl">
            <Flex direction="column" h={430}>
        <SimpleGrid h={145} align="left" ml="20px">
          <Stack spacing="14">
            <Flex >  
            <Carousel
              width="50%"
              dynamicHeight
              infiniteLoop
              // autoPlay
              // interval={3000}
              renderArrowPrev={(onClickHandler, hasPrev, label) =>
                hasPrev && (
                  <button
                    type="button"
                    onClick={onClickHandler}
                    title={label}
                    style={{ ...arrowStyles, left: 15 }}
                  >
                    <Image 
                      src="./images/arrowLeft.svg" 
                      alt="Arrow Left" 
                      h="35px" 
                      mr="-200px" 
                      mt="20px"
                    />
                  </button>
                )
              }
                renderArrowNext={(onClickHandler, hasNext, label) =>
                hasNext && (
                  <button
                    type="button"
                    onClick={onClickHandler}
                    title={label}
                    style={{ 
                      ...arrowStyles, 
                      right: 15 
                    }}
                  >
                    <Image 
                      src="./images/arrowRight.svg" 
                      alt="Arrow Right" 
                      color="#52C1FF" 
                      h="35px" 
                      ml="-380px" 
                      mt="20px"
                    />
                  </button>
                )
              }
              renderIndicator={(onClickHandler, isSelected, index, label) => {
                if (isSelected) {
                  return (
                    <li
                      style={{ ...indicatorStyles, background: "#52C1FF" }}
                      aria-label={`Selected: ${label} ${index + 1}`}
                      title={`Selected: ${label} ${index + 1}`}
                    />
                  );
                }
                return (
                  <li
                    style={indicatorStyles}
                    onClick={onClickHandler}
                    onKeyDown={onClickHandler}
                    value={index}
                    key={index}
                    role="button"
                    tabIndex={0}
                    title={`${label} ${index + 1}`}
                    aria-label={`${label} ${index + 1}`}
                  />
                );
              }}
            >
              <Box>
                <Image src="/images/image1.jpg" 
                    style={{ height: "250px", width: "400px" }} 
                    objectFit="cover" 
                    mt="50px"
                />
              </Box>
              <Box>
                <Image src="/images/image2.jpg" 
                    style={{ height: "250px", width: "400px" }} 
                    objectFit="cover" 
                    mt="50px"
                />
              </Box>
              <Box>
                <Image src="/images/image3.jpg" 
                    style={{ height: "250px", width: "400px" }} 
                    objectFit="cover" 
                    mt="50px"
                />
              </Box>
            </Carousel>
            <Container 
              maxW="container.lg" 
              bg="#C4C4C4" 
              mt="50px" 
              w="100vh" 
              ml="50%" 
              position="absolute" 
              h="201px" 
              right="150px"
            >
            <Text align="center" ml="10px">teste</Text>
            </Container>
            </Flex>
          </Stack>
        </SimpleGrid>



        <SimpleGrid ml="20px">        
        <Stack spacing="14" mt="100px" >
            <Flex >  
            <Carousel
              width="50%"
              dynamicHeight
              infiniteLoop
              // autoPlay
              // interval={3000}
              renderArrowPrev={(onClickHandler, hasPrev, label) =>
                hasPrev && (
                  <button
                    type="button"
                    onClick={onClickHandler}
                    title={label}
                    style={{ ...arrowStyles, left: 15 }}
                  >
                    <Image 
                      src="./images/arrowLeft.svg" 
                      alt="Arrow Left" 
                      h="35px" 
                      mr="-200px" 
                      mt="20px"
                    />
                  </button>
                )
              }
                renderArrowNext={(onClickHandler, hasNext, label) =>
                hasNext && (
                  <button
                    type="button"
                    onClick={onClickHandler}
                    title={label}
                    style={{ 
                      ...arrowStyles, 
                      right: 15 
                    }}
                  >
                    <Image 
                      src="./images/arrowRight.svg" 
                      alt="Arrow Right" 
                      color="#52C1FF" 
                      h="35px" 
                      ml="-380px" 
                      mt="20px"
                    />
                  </button>
                )
              }
              renderIndicator={(onClickHandler, isSelected, index, label) => {
                if (isSelected) {
                  return (
                    <li
                      style={{ ...indicatorStyles, background: "#52C1FF" }}
                      aria-label={`Selected: ${label} ${index + 1}`}
                      title={`Selected: ${label} ${index + 1}`}
                    />
                  );
                }
                return (
                  <li
                    style={indicatorStyles}
                    onClick={onClickHandler}
                    onKeyDown={onClickHandler}
                    value={index}
                    key={index}
                    role="button"
                    tabIndex={0}
                    title={`${label} ${index + 1}`}
                    aria-label={`${label} ${index + 1}`}
                  />
                );
              }}
            >
              <Box>
                <Image src="/images/image1.jpg" 
                    style={{ height: "250px", width: "400px" }} 
                    objectFit="cover" 
                    mt="50px"
                />
              </Box>
              <Box>
                <Image src="/images/image2.jpg" 
                    style={{ height: "250px", width: "400px" }} 
                    objectFit="cover" 
                    mt="50px"
                />
              </Box>
              <Box>
                <Image src="/images/image3.jpg" 
                    style={{ height: "250px", width: "400px" }} 
                    objectFit="cover" 
                    mt="50px"
                />
              </Box>
            </Carousel>
            <Container 
              maxW="container.lg" 
              bg="#C4C4C4" 
              mt="50px" 
              w="100vh" 
              ml="50%" 
              position="absolute" 
              h="201px" 
              right="150px"
            >
            <Text align="center" ml="10px">teste</Text>
            </Container>
            </Flex>
          </Stack>

          </SimpleGrid>









          
      </Flex>





      <SimpleGrid ml="20px">        
      <Stack spacing="14" mt="60px">
            <Flex >  
            <Carousel
              width="50%"
              dynamicHeight
              infiniteLoop
              // autoPlay
              // interval={3000}
              renderArrowPrev={(onClickHandler, hasPrev, label) =>
                hasPrev && (
                  <button
                    type="button"
                    onClick={onClickHandler}
                    title={label}
                    style={{ ...arrowStyles, left: 15 }}
                  >
                    <Image 
                      src="./images/arrowLeft.svg" 
                      alt="Arrow Left" 
                      h="35px" 
                      mr="-200px" 
                      mt="20px"
                    />
                  </button>
                )
              }
                renderArrowNext={(onClickHandler, hasNext, label) =>
                hasNext && (
                  <button
                    type="button"
                    onClick={onClickHandler}
                    title={label}
                    style={{ 
                      ...arrowStyles, 
                      right: 15 
                    }}
                  >
                    <Image 
                      src="./images/arrowRight.svg" 
                      alt="Arrow Right" 
                      color="#52C1FF" 
                      h="35px" 
                      ml="-380px" 
                      mt="20px"
                    />
                  </button>
                )
              }
              renderIndicator={(onClickHandler, isSelected, index, label) => {
                if (isSelected) {
                  return (
                    <li
                      style={{ ...indicatorStyles, background: "#52C1FF" }}
                      aria-label={`Selected: ${label} ${index + 1}`}
                      title={`Selected: ${label} ${index + 1}`}
                    />
                  );
                }
                return (
                  <li
                    style={indicatorStyles}
                    onClick={onClickHandler}
                    onKeyDown={onClickHandler}
                    value={index}
                    key={index}
                    role="button"
                    tabIndex={0}
                    title={`${label} ${index + 1}`}
                    aria-label={`${label} ${index + 1}`}
                  />
                );
              }}
            >
              <Box>
                <Image src="/images/image1.jpg" 
                    style={{ height: "250px", width: "400px" }} 
                    objectFit="cover" 
                    mt="50px"
                />
              </Box>
              <Box>
                <Image src="/images/image2.jpg" 
                    style={{ height: "250px", width: "400px" }} 
                    objectFit="cover" 
                    mt="50px"
                />
              </Box>
              <Box>
                <Image src="/images/image3.jpg" 
                    style={{ height: "250px", width: "400px" }} 
                    objectFit="cover" 
                    mt="50px"
                />
              </Box>
            </Carousel>
            <Container 
              maxW="container.lg" 
              bg="#C4C4C4" 
              mt="50px" 
              w="100vh" 
              ml="50%" 
              position="absolute" 
              h="201px" 
              right="150px"
            >
            <Text align="center" ml="10px">teste</Text>
            </Container>
            </Flex>
          </Stack>

          <Box align="center">    
          <Button bg="#FEC200" color="#FFFFFF" >Ver mais...</Button>
          </Box>
          </SimpleGrid>
        </Container>
        </VStack>
      );
}