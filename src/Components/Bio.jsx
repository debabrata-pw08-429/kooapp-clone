import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Flex,
  Text,
  Image,
  Button,
  Input,
  IconButton,
  ModalOverlay,
  ModalContent,
  Modal,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import { SideBar } from "./SideBar";
import back from "../Images/back.svg";
import dots3 from "../Images/dots3.svg";
import upload from "../Images/upload.svg";
import deleteicon from "../Images/deleteicon.svg";
import plus from "../Images/plus.svg";
import whiteplus from "../Images/whiteplus.svg";
import axios from "axios";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Bio = () => {
  const [images, setImages] = useState(Array(10).fill(null));
  const [modalIsOpen1, setModalIsOpen1] = useState(false);
  const [modalIsOpen2, setModalIsOpen2] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const hiddenFileInput = useRef(null);
  const [data, setData] = useState([]);
  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };
  const handleImageUpload = (event) => {
    const selectedImages = Array.from(event.target.files).map((file) =>
      URL.createObjectURL(file)
    );
    setImages((prevImages) => {
      const newImages = [...prevImages];
      let nullCount = 0;
      for (
        let i = 0;
        i < newImages.length && nullCount < selectedImages.length;
        i++
      ) {
        if (newImages[i] === null) {
          newImages[i] = selectedImages[nullCount];
          nullCount++;
        }
      }
      return newImages;
    });
  };

  const handleImageDelete = (index) => {
    setImages((prevImages) => {
      const newImages = [...prevImages];
      newImages[index] = null;
      return newImages;
    });
  };

  console.log(images);
  const handleModalOpen1 = () => {
    setModalIsOpen1(true);
  };

  const handleModalClose1 = () => {
    setModalIsOpen1(false);
  };

  const handleModalOpen2 = () => {
    setModalIsOpen2(true);
  };

  const handleModalClose2 = () => {
    setModalIsOpen2(false);
  };

  useEffect(() => {
    axios.get(`http://localhost:8000/user`).then((res) => {
      setData(res.data);
    });
  }, [images]);
  return (
    <Flex>
      <SideBar />

      <Box w="620px" bg="rgb(248,247,243)" p="20px 24px 0">
        {/* User details top box of image */}
        <Box borderRadius="14px">
          <Box
            display="flex"
            justifyContent="space-between"
            position="fixed"
            w="572px"
            h="88px"
            p="24px 12px"
            borderRadius="14px"
            bg=" linear-gradient(180deg,rgba(0,0,0,.25),transparent)"
          >
            <Image w="24px" h="24px" src={back} />
            <Image src={dots3} />
          </Box>
          {!images.every((img) => img === null) ? (
            <Box position="relative">
              {images.map(
                (img, index) =>
                  img !== null && (
                    <Image
                      key={index}
                      borderRadius="14px"
                      objectFit="cover"
                      objectPosition="center top"
                      src={img}
                      position={
                        index === currentImageIndex ? "relative" : "absolute"
                      }
                      w="100%"
                      h="100%"
                    />
                  )
              )}
              {currentImageIndex > 0 && (
                <IconButton
                  position="absolute"
                  left="12px"
                  top="50%"
                  transform="translateY(-50%)"
                  size="lg"
                  aria-label="Previous Image"
                  icon={<IoIosArrowBack />}
                  onClick={() =>
                    setCurrentImageIndex((prevIndex) => prevIndex - 1)
                  }
                />
              )}
              {currentImageIndex < images.length - 1 &&
                images[currentImageIndex + 1] !== null && (
                  <IconButton
                    position="absolute"
                    right="12px"
                    top="50%"
                    transform="translateY(-50%)"
                    size="lg"
                    aria-label="Next Image"
                    icon={<IoIosArrowForward />}
                    onClick={() =>
                      setCurrentImageIndex((prevIndex) => prevIndex + 1)
                    }
                  />
                )}
              <Button
                w="158PX"
                h="35px"
                mt="-75%"
                ml="80%"
                mb="50%"
                bg="none"
                color="white"
                fontSize="40px"
                _hover={{ backgroundColor: "transparent" }}
                onClick={handleModalOpen2}
              >
                <Image src={whiteplus} bg="none" />
              </Button>
            </Box>
          ) : (
            <Box>
              <Image
                borderRadius="14px"
                object-fit="cover"
                object-position="center top"
                src={"https://images.kooapp.com/img/media-placeholder.png"}
              />
              <Button
                w="158PX"
                h="35px"
                mt="-65%"
                ml="35%"
                mb="50%"
                border="1px solid #759295"
                padding="7px 30px"
                borderRadius="51px"
                color="#fff"
                lineHeight="19px"
                fontSize="16px"
                fontWeight="500"
                bg="#4b4b4b"
                onClick={handleModalOpen2}
              >
                + Add Photos
              </Button>
            </Box>
          )}

          <Modal
            isOpen={modalIsOpen2}
            onRequestClose={handleModalClose2}
            isCentered
            size="full"
          >
            <ModalOverlay />
            <ModalContent rounded="24px" maxW="820px">
              <ModalHeader mt="15px" textAlign="center">
                Add Photos
              </ModalHeader>
              <ModalCloseButton mt="25px" onClick={handleModalClose2} />
              <ModalBody>
                <Box
                  gap="16px"
                  w="444px"
                  h="444px"
                  m="auto"
                  borderRadius="50px"
                  border="2px dashed #e8e8e3"
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                >
                  <Image src={upload} mt="90px" mb="55px" />
                  <Text fontSize="16px" fontWeight="500" color="#888">
                    Drag and drop an image file (JPG, PNG, BMP)
                  </Text>
                  <Button
                    w="164px"
                    h="45px"
                    onClick={handleClick}
                    p="6px 12px"
                    borderRadius="50px"
                    bg="#4b4b4b"
                    color="white"
                  >
                    Choose a file
                  </Button>
                  <Input
                    type="file"
                    multiple
                    ref={hiddenFileInput}
                    onChange={handleImageUpload}
                    display="none"
                  />
                </Box>
                <Box w="389px" ml="-15px" h="80px" p="15px 42px"></Box>
              </ModalBody>

              <ModalFooter display="flex" flexDirection="column">
                <Box w="708px" h="60px" margin="auto" display="flex" gap="12px">
                  {Array(10)
                    .fill(null)
                    .map((_, index) => (
                      <Box
                        key={index}
                        w="60px"
                        h="60px"
                        border="none"
                        bg="#f8f7f3"
                        borderRadius="5px"
                      >
                        <Image
                          mt={images[index] == null ? "20px" : "0"}
                          ml={images[index] == null ? "20px" : "0"}
                          borderRadius="10px"
                          objectFit="cover"
                          w={images[index] == null ? "18px" : "60px"}
                          h={images[index] == null ? "18px" : "60px"}
                          src={images[index] ?? plus}
                          bg="#f8f7f3"
                        />
                        <Image
                          display={images[index] == null ? "none" : "block"}
                          onClick={() => handleImageDelete(index)}
                          src={deleteicon}
                          w="22px"
                          h="22px"
                          mt="-60px"
                          ml="40px"
                          opacity="01"
                          bg="none"
                        />
                      </Box>
                    ))}
                </Box>
                <Button
                  onClick={handleModalClose2}
                  mt="15px"
                  w="164px"
                  h="45px"
                  p="6px 12px"
                  borderRadius="50px"
                  bg="#4b4b4b"
                  color="white"
                >
                  Done
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Box>

        {/* User details bottom box */}
        <Box
          w="572px"
          mt="-50px"
          pos="relative"
          zIndex="2"
          bg="white"
          borderRadius="12px 12px 0 0"
          p="20px 24px"
          border="1px solid #e8e8e3"
          borderBottom="0"
        >
          {/* Name and edit button box */}
          <Box display="flex" justifyContent="space-between">
            <Box>
              <Text fontSize="17px" fontWeight="500">
                Keerthi malini
              </Text>
              <Text fontSize="15px" fontWeight="500" color="#888">
                @keerthi777OKN
              </Text>
            </Box>
            <Box>
              <Button
                w="78px"
                h="26px"
                border="1px solid #759295"
                padding="3px 16px 5px"
                textAlign="center"
                borderRadius="20px"
                color="#fff"
                lineHeight="19px"
                fontSize="12px"
                fontWeight="500"
                bg="#4b4b4b"
              >
                Edit
              </Button>
            </Box>
          </Box>

          {/* Self verify button */}
          <Box m="8px 0 16px">
            <Button
              padding=" 3.5px 10px 3.5px 12px"
              border="1px solid #4b4b4b"
              bg="white"
              fontSize="14px"
              fontWeight="500"
              w="102px"
              h="25px"
              borderRadius="90px"
            >
              Self Verify{" "}
              <Image
                w="15px"
                h="15px"
                src="https://www.kooapp.com/_next/static/media/Chevron_right.7827f33e.svg"
              />
            </Button>
          </Box>

          {/* Koo your opinion div  */}
          <Box
            w="522px"
            h="21px"
            m="0 0 14px"
            fontSize="14px"
            fontWeight="500"
            display="flex"
          >
            <Text>Koo Your Opinion!</Text>
            <Text
              onClick={handleModalOpen1}
              color="#1e63bd"
              cursor="pointer"
              fontSize="14px"
              fontWeight="500"
              ml="5px"
            >
              ...more
            </Text>
            <Modal
              isOpen={modalIsOpen1}
              onRequestClose={handleModalClose1}
              isCentered
              size="sm"
            >
              <ModalOverlay />
              <ModalContent rounded="24px">
                <ModalHeader textAlign="center">More Information</ModalHeader>
                <ModalCloseButton mt="10px" onClick={handleModalClose1} />
                <hr />
                <ModalBody>
                  <Box display="flex" justifyContent="space-between" p="16px">
                    <Box>
                      <Text fontSize="16px" fontWeight="500" maxWidth="93%">
                        Keerthi malini
                      </Text>
                      <Text fontSize="14px" fontWeight="500" color="#888">
                        @keerthi777OKN
                      </Text>
                    </Box>
                    <Box>
                      <Button
                        w="78px"
                        h="26px"
                        border="1px solid #759295"
                        padding="3px 16px 5px"
                        textAlign="center"
                        borderRadius="20px"
                        color="#fff"
                        lineHeight="19px"
                        fontSize="12px"
                        fontWeight="500"
                        bg="#4b4b4b"
                      >
                        Edit
                      </Button>
                    </Box>
                  </Box>
                  <hr />
                  <Box w="389px" ml="-15px" h="80px" p="15px 42px">
                    <Text mt="5px" mb="15px" fontSize="15px" fontWeight="500">
                      Koo Your Opinion!
                    </Text>
                    <hr />
                    <Box
                      display="flex"
                      m="15px 0"
                      fontSize="15px"
                      fontWeight="500"
                    >
                      <Image src="https://www.kooapp.com/_next/static/media/Calendar.800ff908.svg" />
                      <Text ml="10px">Joined on Mar 2023</Text>
                    </Box>
                  </Box>
                </ModalBody>

                <ModalFooter></ModalFooter>
              </ModalContent>
            </Modal>
          </Box>

          {/* Followers and following div */}
          <Box w="522px" h="47px" display="flex">
            <Box
              w="132px"
              h="47px"
              p="0 14px 0 0"
              display="flex"
              fontSize="14px"
              fontWeight="500"
            >
              0{" "}
              <Text color="#888" fontSize="14px" ml="8px">
                Followers
              </Text>
            </Box>
            <Box
              w="375px"
              h="47px"
              p="0 14px 0 0"
              display="flex"
              fontSize="14px"
              fontWeight="500"
            >
              2{" "}
              <Text color="#888" fontSize="14px" ml="8px">
                Following
              </Text>
            </Box>
          </Box>

          {/* Like share comment buttons */}
          <Box w="572px" h="55px" display="flex">
            <Box w="108px" h="55px" p="6px">
              <Image src="https://www.kooapp.com/_next/static/media/Koobirdactive.16f92b26.svg" />
            </Box>
            <Box w="108px" h="55px" p="6px">
              <Image src="https://www.kooapp.com/_next/static/media/Likeactive1.5.15119c98.svg" />
            </Box>
            <Box w="108px" h="55px" p="6px">
              <Image src="https://www.kooapp.com/_next/static/media/Inactive-comment.1da7dc7e.svg" />
            </Box>
            <Box w="108px" h="55px" p="6px">
              <Image src="https://www.kooapp.com/_next/static/media/Rekoo1.5.f5fc50fa.svg" />
            </Box>
            <Box w="108px" h="55px" p="6px">
              <Image src="https://www.kooapp.com/_next/static/media/@.398f74b7.svg" />
            </Box>
          </Box>

          {/* No Koo found box */}
          <Box w="572px" h="176px" pt="51px" textAlign="center">
            <Text fontSize="17px" fontWeight="500" color="gray">
              No Koo Found
            </Text>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export { Bio };

// {selectedImage && (
//     <div>
//         <Image
//             alt="not found"
//             width={"250px"}
//             src={URL.createObjectURL(selectedImage)}
//         />
//         <br />
//         <Button onClick={() => setSelectedImage(null)}>Remove</Button>
//     </div>
// )}

// <br />
// <br />
// <Button onClick={handleClick}>
//     Upload a file
// </Button>
// <Input
//     type="file"
//     ref={hiddenFileInput}
//     onChange={(event) => {
//         setSelectedImage(event.target.files[0]);
//     }}
//     bg='rgb(136,136,136)'
// />

//                     </div> */}
