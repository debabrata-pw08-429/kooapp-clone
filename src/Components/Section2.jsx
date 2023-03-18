import React from "react";
import Styles from "../Styles/stats.css";
import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import Slider from "./Slider";

const Section2 = () => {
  return (
    <Box className={Styles.Home_carouselContainer__K44P8}>
      <Flex
        direction="column"
        align="center"
        justify="center"
        textAlign="center"
        py={10}
      >
        <Heading as="h2" fontSize="4xl" mb={4}>
          Features to explore
        </Heading>
        <Heading as="h3" fontSize="2xl">
          Amazing features to connect with people
        </Heading>
      </Flex>

      <Slider />
    </Box>
  );
};

export default Section2;
