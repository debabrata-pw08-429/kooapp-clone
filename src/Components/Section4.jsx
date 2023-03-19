import { Box, Flex, Image, Text } from "@chakra-ui/react";
import QR_SS from "../Images/QR_SS.png";

const Section4 = () => {
  return (
    <>
      <Flex direction="column">
        <Box className="Home_getKooSection__A8s8F">
          <Box>
            <Text className="Home_numberSectionHeading1__a65Wb" fontSize="3xl">
              Get Koo
            </Text>
            <Text className="Home_numberSectionHeading2__koVkf" fontSize="md">
              Scan the QR code below and download the Koo app for better
              experience and latest features
            </Text>
            <Box className="Home_heading3__Q0m4m" pt="50px" pb="0px">
              <Image src={QR_SS} />
            </Box>
          </Box>
          <Box>
            <Image
              width="476px"
              height="542px"
              src="https://images.kooapp.com/img/getkoo.png"
            />
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default Section4;
