import React, { useEffect, useRef } from "react";
import Styles from "../Styles/stats.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import $ from "jquery";
import "slick-carousel/slick/slick.min.js";
import { Image, Box } from "@chakra-ui/react";

function Slider() {
  const sliderRef = useRef(null);

  let win = window.innerWidth;

  useEffect(() => {
    $(sliderRef.current).slick({
      slidesToShow: win <= 412 ? 1 : 3.6,
      slidesToScroll: 3,
      autoplay: true,
      autoplaySpeed: 2000,
    });
  }, []);

  const s1 = {
    borderRadius: "1.5rem",
    height: "100% !important",
    width: "100% !important",
    objectFit: "cover",
    color: "transparent",
  };

  return (
    <>
      <Box
        alignItems="center"
        className="autoplay"
        ref={sliderRef}
        width={window.innerWidth}
        my="1rem"
        mb="50px"
      >
        <Box>
          <Image
            src="https://images.kooapp.com/img/home_page9.jpeg"
            width="320px"
            height="540px"
            style={s1}
            className={Styles.Home_carouselImage__D1xpn}
          />
        </Box>
        <Box>
          <Image
            src="https://images.kooapp.com/img/home_page1.jpeg"
            width="320px"
            height="540px"
            style={s1}
            className={Styles.Home_carouselImage__D1xpn}
          />
        </Box>
        <Box>
          <Image
            src="https://images.kooapp.com/img/home_page2.jpeg"
            width="320px"
            height="540px"
            style={s1}
            className={Styles.Home_carouselImage__D1xpn}
          />
        </Box>
        <Box>
          <Image
            src="https://images.kooapp.com/img/home_page3.jpeg"
            width="320px"
            height="540px"
            style={s1}
            className={Styles.Home_carouselImage__D1xpn}
          />
        </Box>
        <Box>
          <Image
            src="https://images.kooapp.com/img/home_page4.jpeg"
            width="320px"
            height="540px"
            style={s1}
            className={Styles.Home_carouselImage__D1xpn}
          />
        </Box>
        <Box>
          <Image
            src="https://images.kooapp.com/img/home_page5.jpeg"
            width="320px"
            height="540px"
            style={s1}
            className={Styles.Home_carouselImage__D1xpn}
          />
        </Box>
        <Box>
          <Image
            src="https://images.kooapp.com/img/home_page6.jpeg"
            width="320px"
            height="540px"
            style={s1}
            className={Styles.Home_carouselImage__D1xpn}
          />
        </Box>
        <Box>
          <Image
            src="https://images.kooapp.com/img/home_page7.jpeg"
            width="320px"
            height="540px"
            style={s1}
            className={Styles.Home_carouselImage__D1xpn}
          />
        </Box>
      </Box>
    </>
  );
}

export default Slider;
