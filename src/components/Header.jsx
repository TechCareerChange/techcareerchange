import { Box, HStack, Button, Image, Heading, Link } from "@chakra-ui/react";
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
  return (
    <HStack
      bgColor="white"
      pt="1%"
      pb="1%"
      pl="5%"
      pr="5%"
      justifyContent="space-between"
      //borderBottom="1px solid #e2e8f0"
    >
      <Link href="/">
        <HStack>
          <Image
            src="https://i.imgur.com/IRXSGCY.png"
            alt="techchangelogo"
            boxSize="15%"
          />
          <Heading as="h1" size="md" textColor="black">
            Tech Career Change
          </Heading>
        </HStack>{" "}
      </Link>
      <HStack boxSize="50%">
        {menuItems.map((item) => {
          return (
            <Link href={item.linkPath} key={item.linkName} pr="3%" pl="3%">
              <Box textColor="black">
                <Heading as="h1" size="sm" textColor="black">
                  {item.linkName}
                </Heading>
              </Box>{" "}
            </Link>
          );
        })}
      </HStack>
      <a href={URL_CONSTANTS.DISCORD_URL}>
        <Button colorScheme="pink">Join us</Button>
      </a>
    </HStack>
  );
};

export default Header;
