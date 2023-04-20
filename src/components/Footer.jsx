import { Box, Text, Link, Flex, useBreakpointValue } from "@chakra-ui/react";
import * as URL_CONSTANTS from "../constants/constants.js";

const Footer = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box bgColor="white" pt="1%" pb="1%" px="10%" textAlign="center">
      <Flex
        direction={isMobile ? "column" : "row"}
        justifyContent="space-between"
        alignItems="center"
      >
        <Text fontSize="sm" textColor="black" pb={isMobile ? "1%" : 0}>
          made by <a href="https://github.com/MrBenC88">mrbenc88</a> 🚀
        </Text>
        <Flex
          direction={isMobile ? "column" : "row"}
          alignItems={isMobile ? "center" : "initial"}
        >
          <Link href="/about">
            <Text fontSize="sm" textColor="black" py={isMobile ? 1 : 0} px={1}>
              About
            </Text>
          </Link>
          <Link href={URL_CONSTANTS.DISCORD_URL}>
            <Text fontSize="sm" textColor="black" py={isMobile ? 1 : 0} px={1}>
              Discord
            </Text>
          </Link>
          <Link href={URL_CONSTANTS.TCC_MEDIUM_URL}>
            <Text fontSize="sm" textColor="black" py={isMobile ? 1 : 0} px={1}>
              Blog
            </Text>
          </Link>
          <Link href={URL_CONSTANTS.TCC_NOTION_URL}>
            <Text fontSize="sm" textColor="black" py={isMobile ? 1 : 0} px={1}>
              Resources
            </Text>
          </Link>
          <Link href={URL_CONSTANTS.TCC_LINKEDIN_URL}>
            <Text fontSize="sm" textColor="black" py={isMobile ? 1 : 0} px={1}>
              LinkedIn
            </Text>
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
