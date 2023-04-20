import {
  Box,
  Text,
  Link,
  Heading,
  VStack,
  Flex,
  Button,
  Avatar,
  useBreakpointValue,
  HStack,
} from "@chakra-ui/react";

import * as URL_CONSTANTS from "../constants/constants.js";

const teamMembers = [
  {
    name: "Ben Cheung",
    pic: "https://i.imgur.com/IRXSGCY.png",
    role: "Founder",
    desc: "👋 Hi, I'm Ben Cheung (he/him). I am a biochemist turned software engineer. I graduated from UBC BCS and hold a BSc. biochemistry degree at UWindsor. I have worked in full-stack development, data pipelines & infrastructure, and cloud engineering roles for companies like Veeva, Coinbase, and Riot Games. Outside of work, I'm a TFT fan, blockchain enthusiast, and hackathon organizer. ",
    linkedin: "https://www.linkedin.com/in/mrbenc88/",
  },
  {
    name: "Eric Kim",
    pic: "https://i.imgur.com/IRXSGCY.png",
    role: "Founder",
    desc: "Hi all! Eric (he/him) here! I'm a cs career changer with a degree in business (accounting + MIS) from SFU. I'm entering my final semester of the UBC BCS program and am starting full time at a HubSpot in June. I'm moving to WA but will be back and forth from Vancouver. In my free time I enjoy consuming books, memes, and pop culture, and lamenting about how the MCU movies have peaked with Avengers: Endgame. ",
    linkedin: "https://www.linkedin.com/in/eykim195/",
  },
];

const AboutContent = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box bgColor="orange.100" pt="1%" pb="1%" width="100%">
      <Flex direction={isMobile ? "column" : "row"} py="1%" alignItems="center">
        <VStack pt="2%" w="100%" px={{ base: "4", md: "0" }}>
          <Heading as="h1" size="3xl" textColor="black">
            About Tech Career Change
          </Heading>
          <Text textColor="black" fontSize="xl" pt="1%">
            Your supportive community for transitioning into a tech career
          </Text>
          <Flex pt="1%" pb="2%">
            <Box p={isMobile ? 0 : "1%"}>
              <a href={URL_CONSTANTS.DISCORD_URL}>
                <Button colorScheme="pink" size={isMobile ? "lg" : "md"}>
                  Join us
                </Button>
              </a>
            </Box>
          </Flex>
          <Box
            w="100%"
            bgColor="orange.50"
            py="2%"
            px={{ base: "4", md: "10%" }}
          >
            <Heading as="h1" size="lg" textColor="black" pt="1%">
              Ready for a fresh start in the tech industry?
            </Heading>
            <Text fontSize="lg" color="black">
              At Tech Career Change, we believe that everyone deserves the
              opportunity to explore a fulfilling and successful career in the
              tech industry. We've created a welcoming and inclusive space for
              people from all walks of life looking to make a change and
              discover the exciting world of technology.
              <br />
              <br /> Whether you're a bootcamper, pursuing a second degree in
              tech, considering a career change, or exploring various tech roles
              such as UI/UX design, we're here to support and guide you on your
              journey. <br />
              <br />
              Join our community, and together, we will grow, learn, and thrive
              through events, career advice, and mentorship.
            </Text>

            <Heading as="h1" size="lg" textColor="black" pt="1%">
              Why Tech Career Change?
            </Heading>
            <Text fontSize="lg" color="black">
              In 2019, our founders faced the challenge of deciding whether to
              commit to a second degree in technology. With limited resources
              and a perceived stigma around unconventional routes, they
              struggled to find a community and support systems tailored for
              individuals like themselves.
              <br />
              <br /> After successfully transitioning from their previous degree
              to computer science, our founders decided to create Tech Career
              Change to fill the gap for people looking for a supportive space
              during their tech career transition. <br />
              <br />
              Our focus is to provide resources, mentorship, and a sense of
              belonging for anyone interested in, currently transitioning to, or
              already thriving in the tech industry.
            </Text>
          </Box>
          <Box w="100%" textAlign="center" alignContent="center">
            <Heading as="h1" size="lg" textColor="black" px="10%" pt="1%">
              Our Team
            </Heading>
            <Flex justifyContent="center" flexWrap="wrap">
              {teamMembers.map((member) => {
                return (
                  <Box
                    w={{ base: "90%", md: "20%" }}
                    h="20%"
                    bgColor="white"
                    mx="1%"
                    my="2%"
                    p="1%"
                    key={member.name}
                    borderRadius="2%"
                    borderColor="black"
                  >
                    <Link href={member.linkedin}>
                      <Avatar
                        src={member.pic}
                        name={member.name}
                        alt={member.name + "pic"}
                        size="2xl"
                      />
                    </Link>
                    <Heading fontSize="lg" as="h1" color="black" pt="3%">
                      {member.name}
                    </Heading>
                    <Text fontSize="lg" color="black" py="1%">
                      {member.role} |{" "}
                      <Link href={member.linkedin}>LinkedIn</Link>
                    </Text>
                    <Text fontSize="sm" color="black" textAlign="left">
                      {member.desc}
                    </Text>
                  </Box>
                );
              })}
            </Flex>
          </Box>
        </VStack>
      </Flex>
    </Box>
  );
};

export default AboutContent;
