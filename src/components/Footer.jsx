import { Box, Text, Link, HStack } from "@chakra-ui/react";
import * as URL_CONSTANTS from "../constants/constants.js";
const Footer = () => {
  return (
    <Box bgColor="white" pt="1%" pb="1%" px="10%" textAlign="center">
      <HStack justifyContent="space-between">
        <Text fontSize="sm" textColor="black">
          made by <a href="https://github.com/MrBenC88">mrbenc88</a> 🚀
        </Text>
        <HStack>
          {" "}
          <Link href="/about">
            <Text fontSize="sm" textColor="black">
              About
            </Text>
          </Link>
          <Link href={URL_CONSTANTS.DISCORD_URL}>
            <Text fontSize="sm" textColor="black">
              Discord
            </Text>
          </Link>{" "}
          <Link href={URL_CONSTANTS.TCC_MEDIUM_URL}>
            <Text fontSize="sm" textColor="black">
              Blog
            </Text>
          </Link>{" "}
          <Link href={URL_CONSTANTS.TCC_NOTION_URL}>
            <Text fontSize="sm" textColor="black">
              Resources
            </Text>
          </Link>
          <Link href={URL_CONSTANTS.TCC_LINKEDIN_URL}>
            <Text fontSize="sm" textColor="black">
              LinkedIn
            </Text>
          </Link>
        </HStack>
      </HStack>
    </Box>
  );
};

export default Footer;
