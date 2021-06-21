import React from "react";
import { CSSProperties } from "react";
import { Box, Flex, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import { IPropsVilla } from "../../types";
import { base_url } from "../../api";

export function CarouselComponent({ acomodacaos}: IPropsVilla) {
  const [cont, setCont] = React.useState(0)
  const indicatorStyles: CSSProperties = {
    background: "#F1FFFC",
    width: 16,
    height: 16,
    borderRadius: 8,
    display: "inline-block",
    margin: "0 8px",
  };
  const arrowStyles: CSSProperties = {
    position: "absolute",
    zIndex: 2,
    top: "calc(50% - 15px)",
    width: 30,
    height: 30,
    cursor: "pointer",
  };
  return (
    <Flex direction="column" h={["100px", "230px"]} w="100%">
      <SimpleGrid h={145} align="center">
        <Stack spacing="14">
          <Carousel
            width="100%"
            dynamicHeight
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
                    h={[8, 16]}
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
                  style={{ ...arrowStyles, right: 15 }}
                >
                  <Image
                    src="./images/arrowRight.svg"
                    alt="Arrow Right"
                    h={[8, 16]}
                  />
                </button>
              )
            }
            renderIndicator={(onClickHandler, isSelected, index, label) => {
              if (isSelected) {
                return (
                  <li
                    style={{ ...indicatorStyles, background: "blue" }}
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

          
            
         
            
          </Carousel>
        </Stack>
      </SimpleGrid>
    </Flex>
  );
}
