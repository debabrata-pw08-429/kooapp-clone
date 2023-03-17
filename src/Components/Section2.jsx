import React from "react";
import Styles from "../Styles/stats.css";
import { Box, Flex, Heading, Image } from "@chakra-ui/react";

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
      {/* <Box className={Styles.Home_carouselSlider__osNuX} display="flex">
        <Image
          src="https://images.kooapp.com/img/home_page9.jpeg"
          alt="koo_carousel"
          loading="lazy"
          width="320px"
          height="540px"
          decoding="async"
          className={Styles.Home_carouselImage__D1xpn}
          style={{ color: "transparent" }}
        />
        <Image
          src="https://images.kooapp.com/img/home_page1.jpeg"
          alt="koo_carousel"
          loading="lazy"
          width="320px"
          height="540px"
          decoding="async"
          className={Styles.Home_carouselImage__D1xpn}
          style={{ color: "transparent" }}
        />
        <Image
          src="https://images.kooapp.com/img/home_page2.jpeg"
          alt="koo_carousel"
          loading="lazy"
          width="320px"
          height="540px"
          decoding="async"
          className={Styles.Home_carouselImage__D1xpn}
          style={{ color: "transparent" }}
        />
        <Image
          src="https://images.kooapp.com/img/home_page3.jpeg"
          alt="koo_carousel"
          loading="lazy"
          width="320px"
          height="540px"
          decoding="async"
          className={Styles.Home_carouselImage__D1xpn}
          style={{ color: "transparent" }}
        />
        <Image
          src="https://images.kooapp.com/img/home_page4.jpeg"
          alt="koo_carousel"
          loading="lazy"
          width="320px"
          height="540px"
          decoding="async"
          className={Styles.Home_carouselImage__D1xpn}
          style={{ color: "transparent" }}
        />
        <Image
          src="https://images.kooapp.com/img/home_page5.jpeg"
          alt="koo_carousel"
          loading="lazy"
          width="320px"
          height="540px"
          decoding="async"
          className={Styles.Home_carouselImage__D1xpn}
          style={{ color: "transparent" }}
        />
        <Image
          src="https://images.kooapp.com/img/home_page6.jpeg"
          alt="koo_carousel"
          loading="lazy"
          width="320px"
          height="540px"
          decoding="async"
          className={Styles.Home_carouselImage__D1xpn}
          style={{ color: "transparent" }}
        />
        <Image
          src="https://images.kooapp.com/img/home_page7.jpeg"
          alt="koo_carousel"
          loading="lazy"
          width="320px"
          height="540px"
          decoding="async"
          className={Styles.Home_carouselImage__D1xpn}
          style={{ color: "transparent" }}
        />
      </Box> */}
    </Box>
  );
};

export default Section2;
