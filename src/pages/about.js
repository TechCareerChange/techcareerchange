import Header from "../components/Header";
import CTABanner from "../components/CTABanner";
import Footer from "../components/Footer";
import AboutContent from "../components/AboutContent";
import { Box, Text } from "@chakra-ui/react";

const About = () => {
  return (
    <Box boxSize="100%" bgColor="orange.50">
      <CTABanner />
      <Header />
      <AboutContent />
      <Footer />
    </Box>
  );
};

export default About;
