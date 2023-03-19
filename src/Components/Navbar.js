import React from "react";
import { Link } from "react-router-dom";
import { theme } from "../Styles/theme/brandTheme";
import styles from "../Styles/home.module.css";
import homeIcon from "../Images/homeIcon.svg";
import exploreIcon from "../Images/exploreIcon.svg";
import trendingIcon from "../Images/trendingIcon.svg";
import searchIcon from "../Images/searchIcon.svg";
import scanIcon from "../Images/scanIcon.svg";
import earthIcon from "../Images/earthIcon.svg";
import koo from "../Images/koo.svg";
import { Login } from "./Login";

import {
  Flex,
  Center,
  Box,
  Divider,
  Button,
  ButtonGroup,
  Heading,
  Img,
  Image,
} from "@chakra-ui/react";

// These are the default breakpoints
// const breakpoints = {
//   sm: "30em", // 480px
//   md: "48em", // 768px
//   lg: "62em", // 992px
//   xl: "80em", // 1280px
//   "2xl": "96em", // 1536px
// };

// Internally, we transform to this
// const breakpoints = ["0em", "30em", "48em", "62em", "80em", "96em"];
import { useSelector } from "react-redux";

const Navbar = () => {
  let isAuth = useSelector((state) => {
    return state.loginReducer.isAuth;
  });

  return (
    <div>
      <Flex
        minWidth="max-content"
        className={styles.nav}
        h="65px"
        gap="2"
        alignItems="center"
        justifyContent={["space-between", "space-between", "space-around"]}
      >
        <Link to="/">
          <Flex p="2">
            <Image src={koo} width={["1.5em", "2em"]} />
            <Heading size="md" alignSelf="center" pl={3}>
              KOO
            </Heading>
          </Flex>
        </Link>

        <ButtonGroup
          gap="5"
          size="sm"
          alignItems="center"
          justifyContent="space-evenly"
        >
          <Box display={["none", "block"]}>
            <Link to="/feed">
              <Img src={homeIcon} />
            </Link>
          </Box>
          <Box display={["none", "block"]}>
            <Link to="/explore">
              <Img src={exploreIcon} />
            </Link>
          </Box>
          <Box display={["none", "block"]}>
            <Link to="/trending">
              <Img src={trendingIcon} />
            </Link>
          </Box>
          <Box display={["none", "block"]}>
            <Link to="/search">
              {" "}
              <Img src={searchIcon} />
            </Link>
          </Box>
          <Box>
            <Link to="/language">
              <Img src={earthIcon} />
            </Link>
          </Box>
          <Login>
            <Button
              sx={{
                "&:hover": {
                  backgroundColor: "blue.500",
                  color: "white",
                  boxShadow: "0 0 0 3px rgba(66, 153, 225, 0.6)",
                },
              }}
              bg={theme.brand.colors.btn_bg_login}
              color="white"
              borderRadius="3xl"
              px={5}
            >
              Login
            </Button>
          </Login>

          <Center height="50px">
            <Divider orientation="vertical" />
          </Center>

          <Button mb={3} bg="white" display={["none", "none", "block"]}>
            <Flex alignItems="center">
              <Img src={scanIcon} />
              Get Koo
            </Flex>
          </Button>
        </ButtonGroup>
      </Flex>
    </div>
  );
};

export default Navbar;
