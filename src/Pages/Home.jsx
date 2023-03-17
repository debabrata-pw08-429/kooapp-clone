import {
  Box,
  Heading,
  HStack,
  Stack,
  Text,
  Spacer,
  Button,
  Divider,
  Flex,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { BsArrowRight } from "react-icons/bs";
import { theme } from "../Styles/theme/brandTheme";

// import Koo_tagline_ss from "../Images/Koo_tagline_ss.png";
import mapbackground from "../Images/mapbackground.webp";
import Section3 from "../Components/Section3";
import Section2 from "../Components/Section2";
import Section1 from "../Components/Section1";

const Home = () => {
  return (
    <div>
      <Stack>
        <HStack>
          <Section1 />
          {/* <Box width={["614px"]}>
            <Box width={["250px"]} height="100%">
              <Heading>Know what's happening!</Heading>
              <Text>All in your Language</Text>
              <Button
                boxSize="100%"
                borderRadius="full"
                bg={theme.brand.colors.btn_bg_login}
                color="white"
                py="1rem"
              >
                Go to Feed
                <BsArrowRight pl="1rem" />
              </Button>
            </Box>
          </Box>
          <Spacer />
          <Box width={["1090px"]}>
            <Image src="https://images.kooapp.com/img/home-new.png" />
          </Box> */}
        </HStack>
        <HStack>
          <Section2 />
        </HStack>
        <HStack>
          <Section3 />
        </HStack>
      </Stack>

      {/* <Grid
        // templateAreas={[
        //   `"1"
        // "2"`,
        //   `"1 2"`,
        // ]}
        gridTemplateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]}
        height="600px"
        gap={6}
        bg="#f1f1ee"
      >
        <GridItem position="relative" top={["420px", "0px"]}></GridItem>
        <GridItem position="relative" bottom={["150px", "0px"]}></GridItem>
      </Grid> */}
    </div>
  );
};

export default Home;
