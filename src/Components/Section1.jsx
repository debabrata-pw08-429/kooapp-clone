import React from "react";
import { theme } from "../Styles/theme/brandTheme";
import { Box, Grid, GridItem, Spacer } from "@chakra-ui/react";
import { Button, Image, Link, Text } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import app_ss from "../Images/app_ss.png";
import { useNavigate } from "react-router-dom";

const Section1 = () => {
  let navigate = useNavigate();
  return (
    <Grid
      templateAreas={[
        `"cta cta" 
        "img img"`,
        `"cta img"`,
      ]}
      templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]}
      gap={3}
      bg="#f1f1ee"
    >
      <GridItem area={["img", "cta"]} pt={[null, "180px"]} pl={[null, "150px"]}>
        <Box textAlign={["center", "left"]} ml={[null, "30px"]}>
          <Text as="b" fontSize="4xl" mb={9}>
            Know what's <br /> happening!
          </Text>

          <Text fontSize="md" my="1rem">
            All in your Language
          </Text>
          <Button
            onClick={() => navigate("/feed")}
            borderRadius="full"
            bg={theme.brand.colors.btn_bg_login}
            size="lg"
            color="white"
          >
            Go to Feed
            <ArrowForwardIcon mx="12px" />
          </Button>
          <Image src={app_ss} width="339px" ml={["30px", "-33px"]} my="30px" />
        </Box>
      </GridItem>
      <GridItem area={["cta", "img"]}>
        <Image
          src="https://images.kooapp.com/img/home-new.png"
          alt="home"
          width="100%"
        />
      </GridItem>
    </Grid>
  );
};

export default Section1;
