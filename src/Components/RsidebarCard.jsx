import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { Avatar, AvatarGroup, Box, Flex, Heading } from "@chakra-ui/react";

const RsidebarCard = ({ ele }) => {
  return (
    <>
      <Box className="card">
        <Flex
          justifyContent={"space-between"}
          p="5px 20px"
          borderRadius={"20px"}
          width="95%"
          margin={"auto"}
          alignItems="center"
          bg={"rgb(248,247,243)"}
        >
          <Box>
            <Flex direction={"column"}>
              <Heading size={"25px"} fontWeight="600">
                {ele.hastag}
              </Heading>
              <Box>
                <AvatarGroup size="sm" max={3} p="10px">
                  <Avatar
                    name="Ryan Florence"
                    src="https://bit.ly/ryan-florence"
                  />
                  <Avatar
                    name="Segun Adebayo"
                    src="https://bit.ly/sage-adebayo"
                  />
                  <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
                  <Avatar
                    name="Prosper Otemuyiwa"
                    src="https://bit.ly/prosper-baba"
                  />
                  <Avatar
                    name="Christian Nwamba"
                    src="https://bit.ly/code-beast"
                  />
                </AvatarGroup>
              </Box>
              <Box fontSize={"12px"} color="rgb(136,138,160)">
                Trending Locally
              </Box>
            </Flex>
          </Box>
          <Box>
            <AiOutlinePlusCircle size={"30px"} />
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default RsidebarCard;
