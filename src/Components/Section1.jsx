import React from "react";
import Styles from "../Styles/stats.css";
import { Box, Button, Flex, Image, Link, Text } from "@chakra-ui/react";

const Section1 = () => {
  return (
    <Flex justifyContent="space-between" height="100%" width="100%">
      <Box className="Home_actions__wqZCp">
        <Text className="Home_heading1__J9o_3" fontSize="4xl" mb={4}>
          Know what's <br /> happening!
          <Text className="Home_heading6__WKQ47" fontSize="md">
            All in your Language
          </Text>
        </Text>
        <Text className="Home_heading2__WovA0" fontSize="2xl" mb={4}>
          All in your Language
        </Text>
        <Button className="Home_goToFeed__sBDJa" size="lg">
          Go to Feed
          <svg
            width="38"
            height="38"
            viewBox="0 0 38 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="Home_goToFeedArrow__0HhU1"
          ></svg>
        </Button>
        <Text className="Home_heading4__RxGgc" mt={8}>
          <Link href="https://app.adjust.net.in/zf169cq">
            <Image
              className="Home_playButton__A92K2"
              src="https://www.kooapp.com/img/googlePlayBadge.png"
              alt="koo_playstore"
              w="150px"
              h="50px"
              loading="lazy"
              decoding="async"
              data-nimg="1"
            />
          </Link>
          <Link href="https://app.adjust.net.in/zf169cq">
            <Image
              className="Home_playButton__A92K2"
              src="/_next/static/media/Appstore.23bfbaef.png"
              alt="playstore"
              w="150px"
              h="50px"
              loading="lazy"
              decoding="async"
              data-nimg="1"
            />
          </Link>
        </Text>
      </Box>
      <Box className={Styles.Home_introimgdiv__mjwbe}>
        <Image
          className={Styles.Home_introimg__iER5I}
          src="https://images.kooapp.com/img/home-new.png"
          alt="home"
          w="1090px"
          h="900px"
        />
      </Box>
    </Flex>
  );
};

export default Section1;
