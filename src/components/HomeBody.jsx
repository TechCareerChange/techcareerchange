import {
  Box,
  Text,
  Link,
  Heading,
  VStack,
  HStack,
  Button,
  Container,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import Image from "next/image";
import img1 from "../../public/screenshot1.png";
import img2 from "../../public/screenshot2.png";

import * as URL_CONSTANTS from "../constants/constants.js";

const resourceContent = [
  {
    title: "💼 Career Change Programs",
    content:
      "Discover a curated list of career change programs, including computer science second degree/diploma programs and more. We're constantly expanding our offerings as we gather more information.",
    url: URL_CONSTANTS.TCC_NOTION_CAREERCHANGEPROGRAMS,
  },
  {
    title: "🍃 Early Career Programs",
    content:
      "Find early career student programs tailored for 1st/2nd-year Bachelor's degree students. As a second-degree student, you are eligible for these programs too!",
    url: URL_CONSTANTS.TCC_NOTION_EARLYCAREERPROGRAMS,
  },
  {
    title: "👢 Bootcamps [NA region]",
    content:
      "Browse our curated list of bootcamps for individuals considering a bootcamp/diploma route. We feature full-time or part-time options, available in-person or remotely.",
    url: URL_CONSTANTS.TCC_NOTION_BOOTCAMPS,
  },
  {
    title: "🌐 Job Search Resources",
    content:
      "Master the art of landing your dream internship or new grad with our comprehensive guide on job hunting methodologies and strategies.",
    url: URL_CONSTANTS.JOB_HUNT_GUIDE,
  },
  {
    title: "🤝 Networking Strategies ",
    content:
      "Build meaningful connections and grow your professional network with our expert advice on effective networking techniques.",
    url: URL_CONSTANTS.NETWORKING_GUIDE,
  },
  {
    title: "🎨 Self-Learning Resources",
    content:
      "Stay tuned for our upcoming compilation of self-learning resources to help you master tech skills at your own pace. And more to be added soon!",
    url: URL_CONSTANTS.TCC_NOTION_URL,
  },
];

const HomeBody = () => {
  return (
    <Box bgColor="orange.50" pt="1%" pb="1%" pr="5%">
      <VStack>
        <HStack pr="2%" pl="2%" pt="2%" pb="3%">
          <Image src={img1} width={1300} height={100} />
          <Image src={img2} width={1300} height={100} />
        </HStack>
      </VStack>

      <VStack textAlign="center" pt="2%" pl="25%" pr="25% " pb="2%">
        <Heading as="h1" size="3xl" textColor="black">
          Ready for a fresh start in the tech industry?
        </Heading>
        <Text textColor="black" fontSize="lg" pt="3%" pl="5%" pr="5%">
          You've come to the right place. Find your new path in tech with our
          inclusive community, offering events, career advice, resources, and
          mentorship for all.
        </Text>{" "}
        <Text textColor="black" fontSize="lg" as="b" pt="2%">
          Start on your tech journey now.{" "}
          <a href={URL_CONSTANTS.DISCORD_URL}>
            {" "}
            <u>Join our community!</u>
          </a>
        </Text>
      </VStack>

      <Box textAlign="center" pt="2%" pb="2%">
        <Heading as="h1" size="xl" textColor="black">
          Explore our Resources
        </Heading>
      </Box>

      <Grid templateColumns="repeat(3, 1fr)" gap={6} pt="2%" pb="2%" px="7%">
        {resourceContent.map((entry, index) => {
          return (
            <GridItem key={entry.title}>
              <Link href={entry.url}>
                <Heading as="h1" size="xl" textColor="black" pt="4%">
                  {entry.title}
                </Heading>
              </Link>
              <Text textColor="black" fontSize="lg" pt="3%" pb="3%">
                {entry.content}
              </Text>{" "}
            </GridItem>
          );
        })}
      </Grid>

      <Box textAlign="center" pt="2%" pb="3%">
        <Heading as="h1" size="lg" textColor="black" pb="1%">
          Check out our community and start your tech journey today!
        </Heading>
        <a href={URL_CONSTANTS.DISCORD_URL}>
          <Button colorScheme="pink">Join us</Button>
        </a>
      </Box>
    </Box>
  );
};

export default HomeBody;
