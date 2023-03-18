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

  return (
    //Main div--
    <Box className="sidebar-main" w="350px">
      <Flex direction="column" m="20px">
        {/* Koo logo-- */}
        <Box w="163px" h="73px">
          <Image className="kooLogo" src={koo} alt="mainlogo" />
        </Box>

        {/* Flex for sidebar options */}
        <Flex direction="column" justifyContent="center" mt="35px" mb="20px">
          {/* Feed option */}
          <Box textAlign="left" m=" 8px" h="48px">
            <Button
              color="rgb(136,136,136)"
              border="none"
              bg="white"
              _hover={{ bg: "#ebedf0" }}
              w="150px"
              h="48px"
              justifyContent="flex-start"
              borderRadius="50px"
            >
              <Image src={feedIcon} alt="" marginRight="8px" />
              Feed
            </Button>
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
              bg="white"
              _hover={{ bg: "#ebedf0" }}
              w="150px"
              h="48px"
              justifyContent="flex-start"
              borderRadius="50px"
            >
              <Image src={acct} alt="" marginRight="8px" />
              {fullName}
              <Popover>
                <PopoverTrigger>
                  <Button color="rgb(136,136,136)" border="none" bg="white">
                    <Image src={dropdown} />
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
                  >
                    <PopoverBody>
                      <Button color="rgb(136,136,136)" border="none" bg="white">
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
              bg="white"
              _hover={{ bg: "#ebedf0" }}
              w="150px"
              h="48px"
              justifyContent="flex-start"
              borderRadius="50px"
            >
              <Image src={hashtag} alt="" marginRight="8px" />
              Explore
            </Button>
          </Box>

          {/* Language option */}
          <Box textAlign="left" m=" 8px" h="48px">
            <Button
              color="rgb(136,136,136)"
              border="none"
              bg="white"
              _hover={{ bg: "#ebedf0" }}
              w="150px"
              h="48px"
              justifyContent="flex-start"
              borderRadius="50px"
            >
              <Image src={lang} alt="" marginRight="8px" />
              Language
            </Button>
          </Box>

          {/* Search option */}
          <Box textAlign="left" m=" 8px" h="48px">
            <Button
              color="rgb(136,136,136)"
              border="none"
              bg="white"
              _hover={{ bg: "#ebedf0" }}
              w="150px"
              h="48px"
              justifyContent="flex-start"
              borderRadius="50px"
            >
              <Image src={search} alt="" marginRight="8px" />
              Search
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
              bg="white"
              _hover={{ bg: "#ebedf0" }}
              w="150px"
              h="48px"
              justifyContent="flex-start"
              borderRadius="50px"
            >
              <Image src={notifications} alt="" marginRight="8px" />
              Notifications
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
              bg="white"
              _hover={{ bg: "#ebedf0" }}
              w="150px"
              h="48px"
              justifyContent="flex-start"
              borderRadius="50px"
            >
              <Image src={logout} alt="" marginRight="8px" />
              Logout
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
  );
};

export { SideBar };
