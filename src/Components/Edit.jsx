import React, { useEffect, useState } from 'react'
import {
    Box,
    Flex,
    Text,
    Image,
    Button,
    Input,
    Card,
    CardHeader,
    Stack,
    Heading,
    CardBody,
    StackDivider,
    Select,
    ModalOverlay,
    ModalContent,
    Modal,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
  } from "@chakra-ui/react";
import { useSelector } from 'react-redux';
import Webcam from "react-webcam";
import captureicon from'../Images/captureicon.svg'
import { useNavigate } from 'react-router-dom';

const WebcamComponent = () => <Webcam />;

const videoConstraints = {
  width: 220,
  height: 200,
  facingMode: "user",
};
function Edit() {
    
    const [modalIsOpen1, setModalIsOpen1] = useState(false);
    const [modalIsOpen2, setModalIsOpen2] = useState(false);
    const [modalIsOpen3, setModalIsOpen3] = useState(false);
    const [modalIsOpen4, setModalIsOpen4] = useState(false);
    const [img,setImg]=useState(false)
    const [image, setImage] = useState("");
    const [mob, setMob] = useState("");
    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [dob, setDob] = useState("");
    const [gender, setGender] = useState("");
    const webcamRef = React.useRef(null);
    let navigate=useNavigate()

    const capture = React.useCallback(() => {
      const imageSrc = webcamRef.current.getScreenshot();
      // console.log(imageSrc)
      setImage(imageSrc);
      // downloadImage(imageSrc);
    }, [webcamRef]);

    useEffect(()=>{

    },[img])

    let img_DP = useSelector((state) => {
        console.log(state.loginReducer)
        return state.loginReducer.picture;
      });

    let fullName = useSelector((state) => {
        return state.loginReducer.name;
    });

    let email = useSelector((state) => {
        return state.loginReducer.email;
    });

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
      const handleModalOpen3 = () => {
        setModalIsOpen3(true);
      };
    
      const handleModalClose3 = () => {
        setModalIsOpen3(false);
      };
    
      const handleModalOpen4 = () => {
        setModalIsOpen4(true);
      };
    
      const handleModalClose4 = () => {
        setModalIsOpen4(false);
      };
  return (
<Box bg='#f8f7f3' h='960px'>
    <Box w='572px' margin='auto'>
        <Box w='572px' h='60px' p='16px 0' display='flex' alignItems='center' fontSize='18px' fontWeight='500' >
            <Button bg='none' margin='0' border='0' p='0' _hover={{bg:"none"}} onClick={()=>{navigate('/bio')}}>
              <Image src='https://www.kooapp.com/img/ic_back.svg'/>
            </Button>
            <span fontSize='18px' fontWeight='500'>Edit Profile</span>
        </Box>

         <Card>
            <CardHeader display='flex'>
                <Image w='100px' h='100px' borderRadius='50%' src={img_DP? img_DP: 'https://www.kooapp.com/img/profilePlaceholderYellow.svg'}/>
                <Box display='flex' flexDirection='column'  justifyContent='left' alignItems='left' pl='30px'>
                    <Text>{fullName? fullName : 'keerthimalini'}</Text>
                    <Button onClick={()=>{setImg(true)}} bg='none' margin='0' border='0' w='60px' h='32px' ml='-15px' p='0' _hover={{bg:"none"}}>
                        <Image  w='30px' h='30px' p='0' src={captureicon}/>
                    </Button>
                    {img && <>                     
                            <div className="webcam-container">
                            <div className="webcam-img">
                                {image == "" ? (
                                <Webcam
                                    audio={false}
                                    height={200}
                                    ref={webcamRef}
                                    screenshotFormat="image/jpeg"
                                    width={220}
                                    videoConstraints={videoConstraints}
                                />
                                ) : (
                                <img src={image} />
                                )}
                            </div>
                            <div>
                                {image != "" ? (<>                               
                                    <Button
                                        onClick={(e) => {
                                        e.preventDefault();
                                        setImage("");
                                        }}
                                        className="webcam-btn"
                                    >
                                        Retake
                                    </Button>
                                    <Button onClick={()=>{setImg(false)}}>Apply</Button>
                                    <Button onClick={()=>{
                                            setImg(false)
                                            setImage("")}
                                            }>
                                        Cancel</Button>
                                </>
                                ) : (
                                    <>
                                        <Button
                                            onClick={(e) => {
                                            e.preventDefault();
                                            capture();
                                            }}
                                            className="webcam-btn"
                                        >
                                            Capture
                                        </Button>
                                    </>
                                )}
                            </div>
                            </div>
                    </>
                    }                
                </Box>
            </CardHeader>
            <hr/>
            <CardBody>
                <Stack  spacing='4'>
                    <Box display='flex'>
                        <Image src='https://www.kooapp.com/img/formIcon/user.svg'/>
                        <Box w='460px' h='80px' textAlign='left' ml='30px'>
                            <Text color='#888' fontWeight='500'>Name</Text>
                            <Input mt='10px' value={name? name : fullName} border='none' textAlign='left' p='0'  onChange={(e)=>{
                               setName(e.target.value)
                            }}></Input>
                            <hr/>
                        </Box>                   
                    </Box>
                    <Box display='flex'>
                        <Image src='https://www.kooapp.com/img/formIcon/email.svg'/>
                        <Box w='460px' h='80px' textAlign='left' ml='30px'>
                            <Text color='#888' fontWeight='500'>Email</Text>
                            <Input mt='10px' value={mail? mail : email} border='none' textAlign='left' p='0'  onChange={(e)=>{
                               setMail(e.target.value)
                            }}></Input>
                            <hr/>
                        </Box>                  
                    </Box>
                    <Box display='flex'>
                        <Image src='https://www.kooapp.com/img/formIcon/phone.svg'/>
                        <Box w='460px' h='80px' textAlign='left' ml='30px'>
                            <Text color='#888' fontWeight='500'>Mobile</Text>
                            <Input mt='10px' value={mob} placeholder='Enter phone' border='none' textAlign='left' p='0' onChange={(e)=>{
                               setMob(e.target.value)
                            }}></Input>
                            <hr/>
                        </Box>                  
                    </Box> 
                    <Box display='flex'>
                        <Image src='https://www.kooapp.com/img/formIcon/sex.svg'/>
                        <Box w='460px' h='80px' textAlign='left' ml='30px'>
                            <Text color='#888' fontWeight='500'>Gender</Text>
                            <Select placeholder='Select Your Gender' border='none' onChange={(e)=>{
                               setGender(e.target.value)
                            }}>
                            <option value='option1'>Male</option>
                            <option value='option2'>Female</option>
                            <option value='option3'>Other</option>
                            </Select>
                            <hr/>
                        </Box>                  
                    </Box>  
                    <Box display='flex'>
                        <Image src='https://www.kooapp.com/img/formIcon/cake.svg'/>
                        <Box w='460px' h='80px' textAlign='left' ml='30px'>
                            <Text color='#888' fontWeight='500'>Date of Birth</Text>
                            <Input mt='10px' type='date' placeholder='dd-mm-yyyy'  border='none' textAlign='left' p='0' onChange={(e)=>{
                               setDob(e.target.value)
                            }}></Input>
                            <hr/>
                        </Box>                  
                    </Box>            
                </Stack>
                <Button bg="#f8f7f3" borderRadius='20%' p='15px 20px' mt='10px'>Save</Button>
            </CardBody>
        </Card>
    </Box>
    <Box  w='572px' h='148px' margin='auto'  mt='10px'>
        <Card>
            <CardHeader>
                <Box display='flex' alignItems='center' fontSize='18px' fontWeight='500' color='#888'>
                  <Image pr='1.4rem' src='https://www.kooapp.com/img/formIcon/link.svg'/>
                 <span >Social Links</span>
                </Box>
            </CardHeader>
            <CardBody>
                <Box w='80%' ml='9%' display='flex' justifyContent='space-between'>
                    <Button bg='none' margin='0' border='0' _hover={{bg:"none"}} onClick={handleModalOpen1}>
                         <Image w='56px' h='56px' src='https://www.kooapp.com/img/formIcon/fbProfile.svg'/>                                    
                    </Button>   
                    <Button bg='none' margin='0' border='0' _hover={{bg:"none"}} onClick={handleModalOpen2}>
                        <Image w='56px' h='56px' src='https://www.kooapp.com/img/formIcon/twitterProfile.svg'/>                                   
                    </Button>  
                    <Button bg='none' margin='0' border='0' _hover={{bg:"none"}} onClick={handleModalOpen3}>
                        <Image w='56px' h='56px' src='https://www.kooapp.com/img/formIcon/linkedInProfile.svg'/>                                   
                    </Button>  
                    <Button bg='none' margin='0' border='0' _hover={{bg:"none"}} onClick={handleModalOpen4}>
                        <Image w='56px' h='56px' src='https://www.kooapp.com/img/formIcon/youTubeProfile.svg'/>                                   
                    </Button>    
                </Box>
                <Modal
                isOpen={modalIsOpen1}
                onRequestClose={handleModalClose1}
                isCentered
                size="lg"
                >
                <ModalOverlay />
                <ModalContent rounded="24px">
                    <ModalHeader textAlign="center">
                        <Box display='flex' alignItems='center' justifyContent='center' fontSize='16px' fontWeight='500' color='#888'>
                            <Image w='40px' h='40px' src='https://www.kooapp.com/img/formIcon/facebook.svg'/>
                            <span>Facebook</span>
                        </Box>                 
                    </ModalHeader>
                    <ModalCloseButton mt="10px" onClick={handleModalClose1} />
                    <hr />
                    <ModalBody>
                    <Box display="flex" justifyContent="space-between" p="16px">
                        <Text fontSize="16px" fontWeight="500" p='0.8rem'>
                        https://www.facebook.com/
                        </Text>
                        <Input w='300px' h='50px' placeholder='e.g Koo'></Input>
                    </Box>
                        <Box textAlign="center">
                        <Button
                            w="52%"
                            h="48px"
                            mt='0.5em'
                            border="1px solid #759295"
                            padding="1em"
                            textAlign="center"
                            borderRadius="24px"
                            color="#fff"
                            lineHeight="19px"
                            fontSize="16px"
                            fontWeight="500"
                            bg="#4b4b4b"
                            onClick={handleModalClose1}
                        >
                            Save
                        </Button>
                        </Box>
                    </ModalBody>

                    <ModalFooter></ModalFooter>
                </ModalContent>
            </Modal>
            {/* Modal - 2 */}
            <Modal
                isOpen={modalIsOpen2}
                onRequestClose={handleModalClose2}
                isCentered
                size="lg"
                >
                <ModalOverlay />
                <ModalContent rounded="24px">
                    <ModalHeader textAlign="center">
                        <Box display='flex' alignItems='center' justifyContent='center' fontSize='16px' fontWeight='500' color='#888'>
                            <Image w='40px' h='40px' src='https://www.kooapp.com/img/formIcon/twitter.svg'/>
                            <span>Twitter</span>
                        </Box>                 
                    </ModalHeader>
                    <ModalCloseButton mt="10px" onClick={handleModalClose2} />
                    <hr />
                    <ModalBody>
                    <Box display="flex" justifyContent="space-between" p="16px">
                        <Text fontSize="16px" fontWeight="500" p='0.8rem'>
                        https://www.twitter.com/
                        </Text>
                        <Input w='300px' h='50px' placeholder='e.g Koo'></Input>
                    </Box>
                        <Box textAlign="center">
                        <Button
                            w="52%"
                            h="48px"
                            mt='0.5em'
                            border="1px solid #759295"
                            padding="1em"
                            textAlign="center"
                            borderRadius="24px"
                            color="#fff"
                            lineHeight="19px"
                            fontSize="16px"
                            fontWeight="500"
                            bg="#4b4b4b"
                            onClick={handleModalClose2}
                        >
                            Save
                        </Button>
                        </Box>
                    </ModalBody>

                    <ModalFooter></ModalFooter>
                </ModalContent>
            </Modal>
             {/* Modal - 3 */}
             <Modal
                isOpen={modalIsOpen3}
                onRequestClose={handleModalClose3}
                isCentered
                size="lg"
                >
                <ModalOverlay />
                <ModalContent rounded="24px">
                    <ModalHeader textAlign="center">
                        <Box display='flex' alignItems='center' justifyContent='center' fontSize='16px' fontWeight='500' color='#888'>
                            <Image w='40px' h='40px' src='https://www.kooapp.com/img/formIcon/linkedin_color.svg'/>
                            <span>LinkedIn</span>
                        </Box>                 
                    </ModalHeader>
                    <ModalCloseButton mt="10px" onClick={handleModalClose3} />
                    <hr />
                    <ModalBody>
                    <Box display="flex" justifyContent="space-between" p="16px">
                        <Text fontSize="16px" fontWeight="500" p='0.8rem'>
                        https://www.linkedin.com/in/
                        </Text>
                        <Input w='300px' h='50px' placeholder='e.g Koo'></Input>
                    </Box>
                        <Box textAlign="center">
                        <Button
                            w="52%"
                            h="48px"
                            mt='0.5em'
                            border="1px solid #759295"
                            padding="1em"
                            textAlign="center"
                            borderRadius="24px"
                            color="#fff"
                            lineHeight="19px"
                            fontSize="16px"
                            fontWeight="500"
                            bg="#4b4b4b"
                            onClick={handleModalClose3}
                        >
                            Save
                        </Button>
                        </Box>
                    </ModalBody>

                    <ModalFooter></ModalFooter>
                </ModalContent>
            </Modal>
            {/* Modal - 4 */}
            <Modal
                isOpen={modalIsOpen4}
                onRequestClose={handleModalClose4}
                isCentered
                size="lg"
                >
                <ModalOverlay />
                <ModalContent rounded="24px">
                    <ModalHeader textAlign="center">
                        <Box display='flex' alignItems='center' justifyContent='center' fontSize='16px' fontWeight='500' color='#888'>
                            <Image w='40px' h='40px' src='https://www.kooapp.com/img/formIcon/youtube_color.svg'/>
                            <span>YouTube</span>
                        </Box>                 
                    </ModalHeader>
                    <ModalCloseButton mt="10px" onClick={handleModalClose4} />
                    <hr />
                    <ModalBody>
                    <Box display="flex" justifyContent="space-between" p="16px">
                        <Text fontSize="16px" fontWeight="500" p='0.8rem'>
                        https://www.youtube.com/
                        </Text>
                        <Input w='300px' h='50px' placeholder='e.g Koo'></Input>
                    </Box>
                        <Box textAlign="center">
                        <Button
                            w="52%"
                            h="48px"
                            mt='0.5em'
                            border="1px solid #759295"
                            padding="1em"
                            textAlign="center"
                            borderRadius="24px"
                            color="#fff"
                            lineHeight="19px"
                            fontSize="16px"
                            fontWeight="500"
                            bg="#4b4b4b"
                            onClick={handleModalClose4}
                        >
                            Save
                        </Button>
                        </Box>
                    </ModalBody>

                    <ModalFooter></ModalFooter>
                </ModalContent>
            </Modal>
            </CardBody>
        </Card>
    </Box>
</Box>
  )
}

export default Edit