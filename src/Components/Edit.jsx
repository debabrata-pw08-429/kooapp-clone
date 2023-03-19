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
    Select
  } from "@chakra-ui/react";
import { useSelector } from 'react-redux';
import Webcam from "react-webcam";
import captureicon from'../Images/captureicon.svg'

const WebcamComponent = () => <Webcam />;

const videoConstraints = {
  width: 220,
  height: 200,
  facingMode: "user",
};
function Edit() {
    const[img,setImg]=useState(false)
    const [image, setImage] = useState("");
    const [mob, setMob] = useState("");
    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [dob, setDob] = useState("");
    const [gender, setGender] = useState("");
    const webcamRef = React.useRef(null);
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
  return (
<Box bg='#f8f7f3'>
    <Box w='572px' margin='auto'>
        <Box w='572px' h='60px' p='16px 0' display='flex' alignItems='center' fontSize='18px' fontWeight='500' >
            <Image src='https://www.kooapp.com/img/ic_back.svg'/>
            <span fontSize='18px' fontWeight='500'>Edit Profile</span>
        </Box>

         <Card>
            <CardHeader display='flex'>
                <Image w='100px' h='100px' borderRadius='50%' src={img_DP? img_DP: 'https://www.kooapp.com/img/profilePlaceholderYellow.svg'}/>
                <Box display='flex' flexDirection='column'  justifyContent='left' alignItems='left' pl='30px'>
                    <Text>{fullName? fullName : 'keerthimalini'}</Text>
                    <Button onClick={()=>{setImg(true)}} bg='none' margin='0' border='0' w='60px' h='32px' ml='-15px' p='0'>
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
                            <Input mt='10px' placeholder='Enter phone' border='none' textAlign='left' p='0' onChange={(e)=>{
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
            </CardBody>
        </Card>
    </Box>
</Box>
  )
}

export default Edit