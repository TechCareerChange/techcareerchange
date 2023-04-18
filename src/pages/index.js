import { Box } from "@chakra-ui/react";
import Header from "../components/Header";
import CTABanner from "../components/CTABanner";
import HeroHeader from "../components/HeroHeader";
import HomeBody from "../components/HomeBody";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <Box boxSize="100%">
      <CTABanner />
      <Header />
      <HeroHeader />
      <HomeBody />
      <Footer />
    </Box>
  );
}
