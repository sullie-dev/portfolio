import { Container, Flex, Text } from "@chakra-ui/react";
import SocialMedia from "./SocialMedia";
import React from "react";

export default function Footer() {
  return (
    <Flex>
      <Container flex={1} width="100%" maxWidth="50%">
        <Text fontSize={["m", "l", "l"]}>© Eoghan O Sullivan 2021</Text>
      </Container>
      <Container flex={1} width="100%" maxWidth="50%">
        <SocialMedia />
      </Container>
      {/* <!-- Start of HubSpot Embed Code --> */}
      <script
        type="text/javascript"
        id="hs-script-loader"
        async
        defer
        src="//js-eu1.hs-scripts.com/25412047.js"
      ></script>
      {/* <!-- End of HubSpot Embed Code --> */}
    </Flex>
  );
}
