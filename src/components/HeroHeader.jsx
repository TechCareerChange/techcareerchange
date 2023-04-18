import {
  Box,
  Text,
  Link,
  Heading,
  VStack,
  HStack,
  Button,
} from "@chakra-ui/react";
import Image from "next/image";
import img from "../../public/splashasset.png";
import * as URL_CONSTANTS from "../constants/constants.js";

const HeroHeader = () => {
  return (
    <Box bgColor="orange.50" pt="1%" pb="1%" pl="5%" pr="5%">
      <HStack pr="2%" pl="2%" pt="3%" pb="3%">
        <VStack textAlign="left" pt="2%">
          <Heading as="h1" size="3xl" textColor="black">
            Your Gateway to a New Beginning
          </Heading>
          <Text textColor="black" fontSize="lg" pt="3%">
            Embrace a new path in the tech industry with Tech Career Change, a
            vibrant community for aspiring professionals from diverse
            backgrounds seeking to transform their careers.
          </Text>
          <HStack width="100%" pt="3%">
            <Box pl="1%" pr="1%">
              {" "}
              <a href={URL_CONSTANTS.DISCORD_URL}>
                <Button colorScheme="pink">Join us</Button>
              </a>
            </Box>
            <Box>
              {" "}
              <a href={URL_CONSTANTS.TCC_NOTION_URL}>
                <Button colorScheme="pink">Resources</Button>
              </a>
            </Box>
          </HStack>
        </VStack>

        <Image src={img} width={800} height={100} />
      </HStack>
    </Box>
  );
};

export default HeroHeader;
