import React from "react";
import WatsApp from "./WatsApp";
import EmailIcon from "./EmailIcon";
import { AiFillApple } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { FiPhone } from "react-icons/fi";
import { BiEdit } from "react-icons/bi";
import { theme } from "../Styles/theme/brandTheme";

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

const Login = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [change, setChange] = React.useState(false);
  const [otpVerify, setotpVerify] = React.useState(false);
  const initialRef = React.useRef(null);

  const s1 = {
    display: "flex",
    flexDirection: "colomn",
    justifyContent: "space-around",
    alignItems: "center",
  };

  return (
    <>
      <Button onClick={onOpen}>sign in</Button>
      <Box position="relative">
        <AbsoluteCenter axis="both">
          <Modal
            size="md"
            initialFocusRef={initialRef}
            isOpen={isOpen}
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
                      {/* <Text my="36px" as="b" pl="17px"></Text> */}
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
                          // isLoading={change ? true : false}
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
                      <Button borderRadius="3xl" variant="outline">
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