import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { Box, IconButton, Flex } from "@chakra-ui/react";

export default function SocialMedia() {
  return (
    <Flex justifyContent={"right"}>
      <a
        href="http://twitter.com/drunkdarthvader"
        rel="noreferrer noopener"
        target="_blank"
      >
        <Box>
          <IconButton
            variant="ghost"
            fontSize={["24px"]}
            aria-label="Follow me on Twitter @drunkdarthvader"
            icon={<FontAwesomeIcon icon={faTwitter} />}
          />
        </Box>
      </a>
      <a
        href="http://instagram.com/drunkdarkvader"
        rel="noreferrer noopener"
        target="_blank"
      >
        <Box>
          <IconButton
            variant="ghost"
            fontSize={["24px"]}
            aria-label="Follow my on Instagram @sullie-dev"
            icon={<FontAwesomeIcon icon={faInstagram} />}
          />
        </Box>
      </a>
      <a
        href="http://github.com/sullie-dev"
        rel="noreferrer noopener"
        target="_blank"
      >
        <Box>
          <IconButton
            variant="ghost"
            fontSize={["24px"]}
            aria-label="Follow my on Github @sullie-dev"
            icon={<FontAwesomeIcon icon={faGithub} />}
          />
        </Box>
      </a>
    </Flex>
  );
}
