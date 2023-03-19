import {
  Avatar,
  AvatarGroup,
  Box,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Link,
  Stack,
} from "@chakra-ui/react";
import { SearchIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { AiOutlinePlusCircle } from "react-icons/ai";

const Rsidebar = () => {
  return (

      <Flex direction={"column"}  m="auto" h='700px' position='sticky' top='0' pt='3%'>
        <Box>
          <Stack spacing={4} p="10px">
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<SearchIcon color="gray.500" />}
              />
              <Input
                type="tel"
                placeholder="Search"
                borderRadius={"20px"}
                bg="rgb(248,247,243)"
              />
            </InputGroup>
          </Stack>
        </Box>
        <Box>
          <Flex justifyContent={"space-between"} padding="0 20px">
            <Heading size={"30px"} fontWeight={"500"}>
              {" "}
              Trending Hashtags
            </Heading>
            <ArrowForwardIcon boxSize={5} />
          </Flex>
        </Box>
        <Flex
          direction={"column"}
          gap="20px"
          mt={"30px"}
          className="allCardContainer"
        >
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
                    #iym2023
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
                      <Avatar
                        name="Kent Dodds"
                        src="https://bit.ly/kent-c-dodds"
                      />
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
                    #iym2023
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
                      <Avatar
                        name="Kent Dodds"
                        src="https://bit.ly/kent-c-dodds"
                      />
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
                    #iym2023
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
                      <Avatar
                        name="Kent Dodds"
                        src="https://bit.ly/kent-c-dodds"
                      />
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
                    #iym2023
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
                      <Avatar
                        name="Kent Dodds"
                        src="https://bit.ly/kent-c-dodds"
                      />
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
        </Flex>
        <Box>
          <Flex justifyContent={"space-evenly"}>
            <Link href="http://www.google.com" color={"rgb(136,136,136)"}>
              About
            </Link>
            <Link to="http://www.google.com" color={"rgb(136,136,136)"}>
              Press
            </Link>
            <Link to="http://www.google.com" color={"rgb(136,136,136)"}>
              Contact
            </Link>
            <Link to="http://www.google.com" color={"rgb(136,136,136)"}>
              Resource Center
            </Link>
            <Link to="http://www.google.com" color={"rgb(136,136,136)"}>
              FAQs
            </Link>
          </Flex>
        </Box>
      </Flex>
  );
};

export default Rsidebar;
