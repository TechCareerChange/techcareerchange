import { Box, Text, Link } from "@chakra-ui/react";
import * as URL_CONSTANTS from "../constants/constants.js";
const CTABanner = () => {
  return (
    <Box
      bgColor="bisque"
      pt="0.7%"
      pb="0.7%"
      pl="5%"
      pr="5%"
      textAlign="center"
    >
      <Text fontSize="lg" textColor="black">
        Looking to break into tech? Join our 600+ member community of tech
        career changers.{" "}
        <Link href={URL_CONSTANTS.DISCORD_URL}>
          <Text as="b">Join us on Discord 🚀</Text>
        </Link>
      </Text>
    </Box>
  );
};

export default CTABanner;
