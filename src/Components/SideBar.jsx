import React, { useState, useEffect } from "react";
import { Login } from "./Login";
import { googleLogout } from "@react-oauth/google";

import {
  Box,
  Button,
  Flex,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Portal,
  useDisclosure,
} from "@chakra-ui/react";
import "../Styles/sidebar.css";
import koo from "../Images/koo.svg";
import feedIcon from "../Images/feed.svg";
import hashtag from "../Images/hashtag.svg";
import lang from "../Images/lang.svg";
import search from "../Images/search.svg";
import acct from "../Images/acct.svg";
import dropdown from "../Images/dropdown.svg";
import logout from "../Images/logout.svg";
import notifications from "../Images/notifications.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { log_out } from "../Redux/login/action";
import { Link } from "react-router-dom";
const SideBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let isAuth = useSelector((state) => {
    return state.loginReducer.isAuth;
  });

  let loggedUser_Data = useSelector((state) => {
    return state;
  });

  let fullName = useSelector((state) => {
    return state.loginReducer.name;
  });

  let img_DP = useSelector((state) => {
    return state.loginReducer.picture;
  });

  return (
    //Main div--
    <Box position="sticky" top="0">
      <Box className="sidebar-main" w="350px" h="700px">
        <Flex direction="column" m="20px">
          {/* Koo logo-- */}
          <Box w="163px" h="73px" ml={["0", "0", "20px", "0"]}>
            <Image className="kooLogo" src={koo} alt="mainlogo" />
          </Box>

          {/* Flex for sidebar options */}
          <Flex
            direction="column"
            justifyContent="center"
            mt="35px"
            mb="20px"
            ml={["0", "0", "50px", "0"]}
          >
            {/* Feed option */}
            <Box textAlign="left" m=" 8px" h="48px">
            <Link to="/feed">
              <Button
                color="rgb(136,136,136)"
                border="none"
                bg={["none", "none", "none", "white"]}
                _hover={{ bg: "#ebedf0" }}
                w="150px"
                h="48px"
                justifyContent="flex-start"
                borderRadius="50px"
              >
                <Image src={feedIcon} alt="" marginRight="8px" />
                <span className="text-fields">Feed</span>
              </Button>
              </Link>
            </Box>

            {/* Username onclick displays the Bio with add account option */}
            <Box
              onClick={() => navigate("/bio")}
              textAlign="left"
              m=" 8px"
              h="48px"
              display={isAuth ? "block" : "none"}
            >
              <Button
                color="rgb(136,136,136)"
                border="none"
                _hover={{ bg: "#ebedf0" }}
                w="150px"
                h="48px"
                justifyContent="flex-start"
                bg={["none", "none", "white"]}
                borderRadius="50px"
              >
                <Image
                  src={img_DP}
                  alt=""
                  marginRight="8px"
                  borderRadius="full"
                  width="28px"
                  height="28px"
                />
                {fullName}
                <Popover>
                  <PopoverTrigger>
                    <Button
                      color="rgb(136,136,136)"
                      border="none"
                      bg="white"
                      display={["none", "none", "block"]}
                    >
                      <Image
                        src={dropdown}
                        display={["none", "none", "block"]}
                      />
                    </Button>
                  </PopoverTrigger>
                  <PopoverArrow />
                  <Portal>
                    <PopoverContent
                      w="200px"
                      h="60px"
                      boxShadow="0 0 10px rgb(136,136,136)"
                      borderRadius="15px"
                      textAlign="center"
                      display={["none", "none", "block"]}
                    >
                      <PopoverBody display={["none", "none", "block"]}>
                        <Button
                          color="rgb(136,136,136)"
                          border="none"
                          bg="white"
                        >
                          Add Account +
                        </Button>
                      </PopoverBody>
                    </PopoverContent>
                  </Portal>
                </Popover>
              </Button>
            </Box>

            {/* Explore option */}
            <Box textAlign="left" m=" 8px" h="48px">
              <Button
                color="rgb(136,136,136)"
                border="none"
                bg={["none", "none", "white"]}
                _hover={{ bg: "#ebedf0" }}
                w="150px"
                h="48px"
                justifyContent="flex-start"
                borderRadius="50px"
              >
                <Image src={hashtag} alt="" marginRight="8px" />
                <span className="text-fields">Explore</span>
              </Button>
            </Box>

            {/* Language option */}
            <Box textAlign="left" m=" 8px" h="48px">
              <Button
                color="rgb(136,136,136)"
                border="none"
                bg={["none", "none", "white"]}
                _hover={{ bg: "#ebedf0" }}
                w="150px"
                h="48px"
                justifyContent="flex-start"
                borderRadius="50px"
              >
                <Image src={lang} alt="" marginRight="8px" />
                <span className="text-fields">Language</span>
              </Button>
            </Box>

            {/* Search option */}
            <Box textAlign="left" m=" 8px" h="48px">
              <Button
                color="rgb(136,136,136)"
                border="none"
                bg={["none", "none", "white"]}
                _hover={{ bg: "#ebedf0" }}
                w="150px"
                h="48px"
                justifyContent="flex-start"
                borderRadius="50px"
              >
                <Image src={search} alt="" marginRight="8px" />
                <span className="text-fields">Search</span>
              </Button>
            </Box>

            {/* Notifications option */}
            <Box
              textAlign="left"
              m=" 8px"
              h="48px"
              display={isAuth ? "block" : "none"}
            >
              <Button
                color="rgb(136,136,136)"
                border="none"
                bg={["none", "none", "white"]}
                _hover={{ bg: "#ebedf0" }}
                w="150px"
                h="48px"
                justifyContent="flex-start"
                borderRadius="50px"
              >
                <Image src={notifications} alt="" marginRight="8px" />
                <span className="text-fields">Notifications</span>
              </Button>
            </Box>

            {/* Logout option with Modal */}
            <Box
              textAlign="left"
              m=" 8px"
              h="48px"
              display={isAuth ? "block" : "none"}
            >
              <Button
                onClick={onOpen}
                color="rgb(136,136,136)"
                border="none"
                bg={["none", "none", "white"]}
                _hover={{ bg: "#ebedf0" }}
                w="150px"
                h="48px"
                justifyContent="flex-start"
                borderRadius="50px"
              >
                <Image src={logout} alt="" marginRight="8px" />
                <span className="text-fields">Logout</span>
              </Button>
              <Modal isOpen={isOpen} onClose={onClose} isCentered size="xs">
                <ModalOverlay />
                <ModalContent>
                  <ModalBody
                    textAlign="center"
                    color="rgb(75,75,75)"
                    fontSize="20px"
                  >
                    Do you want to Log out?
                  </ModalBody>
                  <ModalFooter display="flex" justifyContent="space-evenly">
                    <Button
                      w="80px"
                      h="32px"
                      borderRadius="50px"
                      border="1px solid rgb(75,75,75)"
                      color="rgb(75,75,75)"
                      bg="white"
                      onClick={onClose}
                    >
                      No
                    </Button>
                    <Button
                      w="80px"
                      h="32px"
                      borderRadius="50px"
                      bg="rgb(75,75,75)"
                      color="white"
                      onClick={() => {
                        onClose();
                        dispatch(log_out(loggedUser_Data));
                        window.location.reload();
                      }}
                    >
                      Yes
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </Box>
          </Flex>

          {/* +koo and sign up button */}
          <Flex direction="column" justifyContent="center">
            <Button
              mb={isAuth ? "0" : "80px"}
              bg="rgb(75,75,75)"
              color="white"
              display={["none", "none", "block"]}
              border="none"
              borderRadius="50px"
              p="8px"
              fontSize="19px"
              w="195px"
              h="48px"
            >
              + Koo
            </Button>
            <Login>
              <Button
                display={isAuth ? "none" : "block"}
                bg="rgb(75,75,75)"
                color="white"
                border="none"
                borderRadius="50px"
                p="8px"
                fontSize="19px"
                w="195px"
                h="48px"
              >
                Sign In
              </Button>
            </Login>
          </Flex>
        </Flex>
      </Box>
      <Box
        className="sidebar-sub"
        w="100%"
        h="56px"
        display={["flex", "flex", "none", "none"]}
        justifyContent="space-around"
        position="fixed"
        alignItems="center"
        zIndex="99"
        bg="white"
        bottom="0"
        borderTop="1px solid #e8e8e3"
      >
        <Box w="48px" h="48px" display="flex" alignItems="center">
          <Image w="34px" h="34px" src={feedIcon} />
        </Box>
        <Box w="48px" h="48px" display="flex" alignItems="center">
          <Image w="34px" h="34px" src={hashtag} />
        </Box>
        <Box w="48px" h="48px" display="flex" alignItems="center">
          <Image w="34px" h="34px" src={search} />
        </Box>
        <Box w="48px" h="48px" display="flex" alignItems="center">
          <Image w="34px" h="34px" src={notifications} />
        </Box>
      </Box>
    </Box>
  );
};

export { SideBar };
