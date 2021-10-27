import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import {
  Box,
  Center,
  Heading,
  IconButton,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

export default function Contact() {
  return (
    <div>
      <Heading
        w="650px"
        h="fit-content"
        fontSize={["xl", "5xl"]}
        color="gray.800"
        py={[2, 4, 6, 8]}
        px="1"
      >
        Contact me
      </Heading>
      <Wrap>
        <Center w="100vw" h="80px">
          <WrapItem w={["22%"]}>
            <Center w="120px" h="80px">
              <a
                href="mailto:eoghan@sullie.dev"
                rel="noreferrer noopener"
                target="_blank"
              >
                <Box>
                  <IconButton
                    variant="ghost"
                    fontSize={["24px", "45px"]}
                    aria-label="Email me on eoghan@sullie.dev"
                    icon={<FontAwesomeIcon icon={faEnvelope} />}
                  />
                </Box>
              </a>
            </Center>
          </WrapItem>
          <WrapItem w={["22%"]}>
            <Center w="120px" h="80px">
              <a
                href="http://twitter.com/drunkdarthvader"
                rel="noreferrer noopener"
                target="_blank"
              >
                <Box>
                  <IconButton
                    variant="ghost"
                    fontSize={["24px", "45px"]}
                    aria-label="Follow me on Twitter @drunkdarthvader"
                    icon={<FontAwesomeIcon icon={faTwitter} />}
                  />
                </Box>
              </a>
            </Center>
          </WrapItem>
          <WrapItem w={["22%"]}>
            <Center w="120px" h="80px">
              <a
                href="http://instagram.com/drunkdarkvader"
                rel="noreferrer noopener"
                target="_blank"
              >
                <Box>
                  <IconButton
                    variant="ghost"
                    fontSize={["24px", "45px"]}
                    aria-label="Follow my on Instagram @sullie-dev"
                    icon={<FontAwesomeIcon icon={faInstagram} />}
                  />
                </Box>
              </a>
            </Center>
          </WrapItem>
          <WrapItem w={["22%"]}>
            <Center w="120px" h="80px">
              <a
                href="http://github.com/sullie-dev"
                rel="noreferrer noopener"
                target="_blank"
              >
                <Box>
                  <IconButton
                    variant="ghost"
                    fontSize={["24px", "45px"]}
                    aria-label="Follow my on Github @sullie-dev"
                    icon={<FontAwesomeIcon icon={faGithub} />}
                  />
                </Box>
              </a>
            </Center>
          </WrapItem>
        </Center>
      </Wrap>
    </div>
  );
}
