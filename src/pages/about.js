import Header from "../components/Header";
import CTABanner from "../components/CTABanner";
import { Box, Text } from "@chakra-ui/react";

const About = () => {
  return (
    <Box boxSize="100%" bgColor="orange.50">
      <CTABanner />
      <Header />
      <Text fontSize="2xl" color="black" p="20%">
        About page coming soon!
      </Text>
    </Box>
  );
};

export default About;
