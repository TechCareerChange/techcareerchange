import Header from "../components/Header";
import CTABanner from "../components/CTABanner";
import Footer from "../components/Footer";

import { Box, Text } from "@chakra-ui/react";

const Resources = () => {
  return (
    <Box boxSize="100%" bgColor="orange.50">
      <CTABanner />
      <Header />
      <Text fontSize="2xl" color="black" p="20%">
        Career Change Resources page coming soon!
      </Text>
      <Footer />
    </Box>
  );
};

export default Resources;
