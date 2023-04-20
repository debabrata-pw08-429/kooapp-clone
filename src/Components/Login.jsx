import React from "react";
import { useContext } from "react";
import FeedContext from "../Context/FeedContext";
import axios from "axios";

import { useGoogleLogin } from "@react-oauth/google";
import WatsApp from "./WatsApp";
import EmailIcon from "./EmailIcon";
import { AiFillApple } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { FiPhone } from "react-icons/fi";
import { BiEdit } from "react-icons/bi";
import { theme } from "../Styles/theme/brandTheme";

import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLogin } from "../Redux/login/action";

import {
  useDisclosure,
  Button,
  Stack,
  Checkbox,
  Input,
  InputGroup,
  InputLeftAddon,
  FormControl,
  Box,
  AbsoluteCenter,
  Divider,
  Flex,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Spacer,
} from "@chakra-ui/react";

const Login = ({ children }) => {
  // let {
  //   followstate,
  //   setFollowstate,
  //   idC,
  //   setidC,
  //   trueCount,
  //   setTrueCount,
  //   log,
  //   setLog,
  // } = useContext(FeedContext);

  let isAuth = useSelector((state) => {
    return state.loginReducer.isAuth;
  });

  console.log(isAuth);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [change, setChange] = React.useState(false);
  const [otpVerify, setotpVerify] = React.useState(false);
  const [oathVerify, setoathVerify] = React.useState(isAuth);
  const initialRef = React.useRef(null);

  let navigate = useNavigate();
  let location = useLocation();
  let dispatch = useDispatch();

  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const user = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${tokenResponse.access_token}`,
            },
          }
        );
        setoathVerify(true);
        console.log(user);
        dispatch(setLogin(user.data));
        // setLog(true);
        navigate(location.state === null ? "/feed" : location.state);
      } catch (error) {
        console.log(error);
      }
    },
  });

  const s1 = {
    display: "flex",
    flexDirection: "colomn",
    justifyContent: "space-around",
    alignItems: "center",
  };

  return (
    <>
      <Box
        zIndex={5}
        onClick={onOpen}
        bg="transparent"
        _hover={{ bg: "transparent" }}
      >
        {children}
      </Box>
      <Box position="relative">
        <AbsoluteCenter axis="both">
          <Modal
            size="md"
            initialFocusRef={initialRef}
            isOpen={oathVerify ? null : isOpen}
            onClose={onClose}
          >
            <ModalOverlay />
            {otpVerify ? (
              <ModalContent style={s1} borderRadius="3xl">
                <ModalHeader>Enter OTP</ModalHeader>

                <ModalCloseButton />

                <ModalBody pb={250}>
                  <FormControl mt={4}>
                    <Flex alignItems="center" my="30px">
                      <Text ml="17px" as="b">
                        OTP Sent to{" "}
                      </Text>
                      <Text ml="3px" color="blue" as="b">
                        devhemb13@gmail.com
                      </Text>
                      <Text ml="3px">
                        <BiEdit />
                      </Text>
                    </Flex>
                    <Divider />
                    <Stack spacing={4}>
                      <Input
                        borderRadius="3xl"
                        type="number"
                        placeholder="Enter OTP"
                      />

                      <Button
                        borderRadius="3xl"
                        variant="solid"
                        color="white"
                        bg={theme.brand.colors.bg_otp}
                      >
                        Verify
                      </Button>
                    </Stack>
                    <Divider />
                    <Stack>
                      <Flex flexDirection="column" align="center" my="25px">
                        <Divider />
                        <Text mx={3} as="b">
                          Resend OTP (0 : 30)
                        </Text>
                        <Divider />
                      </Flex>
                    </Stack>
                  </FormControl>
                </ModalBody>
              </ModalContent>
            ) : (
              <ModalContent style={s1} borderRadius="3xl">
                {change ? (
                  <ModalHeader>Enter your E-mail</ModalHeader>
                ) : (
                  <ModalHeader>Enter your Mobile Number</ModalHeader>
                )}

                <ModalCloseButton />

                <ModalBody pb={6}>
                  <FormControl mt={4}>
                    {change ? (
                      <Stack spacing={4}>
                        <InputGroup>
                          <Input
                            borderRadius="3xl"
                            type="email"
                            placeholder="eg.:username@gmail.com"
                          />
                        </InputGroup>
                        <Button
                          onClick={() => setotpVerify(!otpVerify)}
                          borderRadius="3xl"
                          variant="solid"
                          color="white"
                          bg={theme.brand.colors.bg_otp}
                        >
                          Get OTP
                        </Button>
                      </Stack>
                    ) : (
                      <Stack spacing={4}>
                        <InputGroup>
                          <InputLeftAddon
                            borderLeftRadius="3xl"
                            children="+91"
                            bg="transparent"
                          />
                          <Input
                            borderRadius="3xl"
                            type="number"
                            placeholder="Mobile number"
                          />
                        </InputGroup>
                        <Button
                          borderRadius="3xl"
                          variant="solid"
                          color="white"
                          bg={theme.brand.colors.bg_otp}
                        >
                          Get OTP
                        </Button>
                      </Stack>
                    )}

                    <Stack>
                      <Flex align="center" my="25px">
                        <Divider />
                        <Text mx={3} color="#999">
                          OR
                        </Text>
                        <Divider />
                      </Flex>
                      <Button
                        onClick={login}
                        borderRadius="3xl"
                        variant="outline"
                      >
                        <FcGoogle />
                        <Text ml="32px">Sign-in with Google</Text>
                      </Button>
                      <Spacer />
                      <Button my={9} borderRadius="3xl" variant="outline">
                        <AiFillApple />
                        <Text ml="39px"> Sign-in with Apple</Text>
                      </Button>
                      <Spacer />
                      <Button
                        onClick={() => setChange(!change)}
                        my={9}
                        borderRadius="3xl"
                        variant="outline"
                      >
                        {change ? (
                          <>
                            <FiPhone />
                            <Text ml="39px"> Sign in with Mobile Number</Text>
                          </>
                        ) : (
                          <>
                            <EmailIcon />
                            <Text ml="39px"> Sign in with E-mail</Text>
                          </>
                        )}
                      </Button>
                      <Spacer />
                    </Stack>
                  </FormControl>
                </ModalBody>

                <ModalFooter>
                  <Flex flexDirection="column">
                    <Box display="flex" flexDirection="row">
                      <Checkbox pl="21px" size="sm" colorScheme="blue">
                        l agree to receive important updates via Whatsapp{" "}
                      </Checkbox>
                      <WatsApp />
                    </Box>

                    <Box textAlign="center">
                      <Text px="30px" my="5px" size="sm">
                        By continuing, I accept Terms of Service, Privacy Policy
                        and Community Guidelines.
                      </Text>
                    </Box>
                  </Flex>
                </ModalFooter>
              </ModalContent>
            )}
          </Modal>
        </AbsoluteCenter>
      </Box>
    </>
  );
};

export { Login };
