import {
  Box,
  Text,
  Link,
  Heading,
  VStack,
  Flex,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";
import Image from "next/image";
import img from "../../public/splashasset.png";
import * as URL_CONSTANTS from "../constants/constants.js";

const HeroHeader = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box bgColor="orange.50" pt="1%" pb="1%" pl="5%" pr="5%" width="100%">
      <Flex
        direction={isMobile ? "column" : "row"}
        pt="3%"
        pb="3%"
        alignItems="center"
      >
        <VStack pt="2%">
          <Heading as="h1" size="3xl" textColor="black">
            Your Gateway to a New Beginning
          </Heading>
          <Text textColor="black" fontSize="lg" pt="3%">
            Embrace a new path in the tech industry with Tech Career Change, a
            vibrant community for aspiring professionals from diverse
            backgrounds seeking to transform their careers.
          </Text>
          <Flex
            width="100%"
            pt="3%"
            justifyContent={isMobile ? "space-evenly" : "flex-start"}
          >
            <Box pl={isMobile ? 0 : "1%"} pr={isMobile ? 0 : "1%"}>
              {" "}
              <a href={URL_CONSTANTS.DISCORD_URL}>
                <Button colorScheme="pink" size={isMobile ? "lg" : "md"}>
                  Join us
                </Button>
              </a>
            </Box>
            <Box pl={isMobile ? 0 : "1%"} pr={isMobile ? 0 : "1%"}>
              {" "}
              <a href={URL_CONSTANTS.TCC_NOTION_URL}>
                <Button colorScheme="pink" size={isMobile ? "lg" : "md"}>
                  Resources
                </Button>
              </a>
            </Box>
          </Flex>
        </VStack>

        {isMobile ? (
          <Image src={img} width={400} height={50} />
        ) : (
          <Image src={img} width={800} height={100} />
        )}
      </Flex>
    </Box>
  );
};

export default HeroHeader;
