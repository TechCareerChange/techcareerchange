import {
  Box,
  HStack,
  Button,
  Image,
  Heading,
  Link,
  Flex,
  useBreakpointValue,
} from "@chakra-ui/react";
import * as URL_CONSTANTS from "../constants/constants.js";

const menuItems = [
  {
    linkName: "Home",
    linkPath: "/",
  },
  {
    linkName: "About",
    linkPath: "/about",
  },
  {
    linkName: "Resources",
    linkPath: URL_CONSTANTS.TCC_NOTION_URL,
  },
  {
    linkName: "Career Change",
    linkPath: "/resources",
  },
  {
    linkName: "Blog",
    linkPath: URL_CONSTANTS.TCC_MEDIUM_URL,
  },
  {
    linkName: "Discord",
    linkPath: URL_CONSTANTS.DISCORD_URL,
  },
];
const Header = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Flex
      bgColor="white"
      py="1%"
      px="5%"
      justifyContent="space-between"
      w="100%"
      wrap="wrap"
      justifyContent="center"
    >
      <Link href="/">
        <HStack>
          <Image
            src="https://i.imgur.com/IRXSGCY.png"
            alt="techchangelogo"
            boxSize="15%"
            ml={isMobile ? "10%" : "0%"}
            maxW="100%"
          />
          <Heading as="h1" size={isMobile ? "lg" : "md"} textColor="black">
            Tech Career Change
          </Heading>
        </HStack>
      </Link>
      <Flex
        direction={isMobile ? "column" : "row"}
        boxSize={isMobile ? "100%" : "50%"}
        wrap="wrap"
        justifyContent="space-evenly"
        alignItems="center"
      >
        {menuItems.map((item) => {
          return (
            <Link
              href={item.linkPath}
              key={item.linkName}
              py={isMobile ? 1 : 4}
              px={3}
            >
              <Box textColor="black">
                <Heading
                  as="h1"
                  size={isMobile ? "lg" : "sm"}
                  textColor="black"
                >
                  {item.linkName}
                </Heading>
              </Box>{" "}
            </Link>
          );
        })}
      </Flex>

      <a href={URL_CONSTANTS.DISCORD_URL}>
        <Button
          colorScheme="pink"
          mt={isMobile ? 4 : 2}
          size={isMobile ? "lg" : "md"}
        >
          Join us
        </Button>
      </a>
    </Flex>
  );
};

export default Header;
