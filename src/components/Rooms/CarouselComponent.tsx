import { CSSProperties } from "react";
import { Box, Flex, Image} from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";



export function CarouselComponent() {
    
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

    return (
    
    <Flex h="200px">    
    <Carousel
      width="100%"
      dynamicHeight
      // infiniteLoop
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
              // mr="-200px"
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
              right: 15,
            }}
          >
            <Image
              src="./images/arrowRight.svg"
              alt="Arrow Right"
              color="#52C1FF"
              h="35px"
              // ml="-380px"
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
        <Image
          src="/images/image1.jpg"
          objectFit="cover"
          boxSize="200px"
        />
      </Box>
      <Box>
        <Image
          src="/images/image2.jpg"
          objectFit="cover"
          boxSize="200px"
        />
      </Box>
      <Box>
        <Image
          src="/images/image3.jpg"
          objectFit="cover"
          boxSize="200px"
        />
      </Box>
    </Carousel>
    </Flex>
  );
}
