import React,{useState,useRef,useEffect,useLayoutEffect} from 'react'
import style from "../Styles/create.module.css";
import { BiLeftArrowAlt } from "react-icons/bi";
import { BsSend,BsPlusCircle,BsBarChart} from "react-icons/bs";
import { AiOutlineHistory,AiOutlinePlusCircle } from "react-icons/ai";
import { HiOutlineInboxArrowDown,HiOutlineLink } from "react-icons/hi2";
import { ImImages } from "react-icons/im";
import { RxVideo  } from "react-icons/rx";
import { FiSettings  } from "react-icons/fi";
import { Avatar ,Box,HStack,Button,Text,Spacer,CircularProgress, CircularProgressLabel} from '@chakra-ui/react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, Progress, ModalFooter } from "@chakra-ui/react";
import { useSelector,useDispatch } from "react-redux";
import { postData } from '../Redux/PostDetails/action'
import { useNavigate } from "react-router-dom";


function Create() {
  // let { Image } = useSelector((state) => state.LoggedReducer);
  // let Image='https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61nlaq18GGL._SY679_.jpg';
  const dispatch= useDispatch();
  const [count, setCount] = useState(0);
  const [description, setDescription] = useState(0);
  const [file, setFile] = useState([]);
  const fileInputRef = useRef(null);
  const fileInputRef1 = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const [progressCount, setProgressCount] = useState(0);
  
  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setDescription(event.target.value);
    setCount(inputValue.length);
  };
  
  const handleFileChange = (event) => {
    // const selectedFile = event.target.files[0];
    // setFile([...file, selectedFile]);
    console.log(file,"fileeeeeee");
    const selectedFiles = event.target.files;
    const filesArray = Array.from(selectedFiles);
    console.log(filesArray,"filesssssAARRRRay");
    const filesWithPreview = filesArray.map((file) => ({
                                                  fileData:file,
                                                  previewUrl: URL.createObjectURL(file),
                                                  type:file.type,
                                                  date:file.lastModifiedDate,
                              }));
    console.log(filesWithPreview,"ffilesWithPreview");
    setFile([...file, ...filesWithPreview]);
  };

  const handleClose= (index) => {
      const newFiles = [...file];
      newFiles.splice(index, 1);
      setFile(newFiles);
    }

  const handleButtonClick = (i) => {
    i===0? (fileInputRef.current.click()):(fileInputRef1.current.click());
  };

  const handlePost=()=>{
    console.log(file,"fileeeeeee22222222");
    let data={
      description,
      files:[...file],
      likes:0,
      comments:[]
    }
    console.log(data,"dataaaa")
    dispatch(postData(data))
     setIsOpen(true);
  }

  const handleCloseModal = () => {
    if (progressCount<100){
      setIsOpen(false);
      setProgressCount(0);
    }
  };

  const onClose = () => {
    setIsOpen(false);
    setProgressCount(0);
    navigate("/feed");
  };

  useEffect(() => {
    if (isOpen) {
      const interval = setInterval(() => {
        setProgressCount((prevProgressCount) => prevProgressCount + 25);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isOpen]);


  return (
    <div className={style.main}>
      <div className={style.d1}>
          <div className={style.d2} > 
                <HStack marginBottom='2%' marginTop='-2%'>
                    <Box className={style.s1} ><HStack><BiLeftArrowAlt style={{cursor:'pointer'}} size={28} /> <Avatar size="md" style={{cursor:'pointer'}} src={ Image }/></HStack></Box>
                    <Box><HStack  gap={'8%'}><AiOutlineHistory size={30}  style={{cursor:'pointer',fill: '#666666'}} /> <HiOutlineInboxArrowDown size={30} color="#666666" style={{cursor:'pointer'}} /> 
                                  <Button onClick={handlePost} colorScheme='white' disabled={count>500 || count==0 } bg={count>500 || count==0 ? '#b3b2b0': '#4b4b4b'} height='fit-content' size='md' spacing='10px' gap='8px'> <BsSend size={30} />   Post</Button>
                    </HStack></Box>
                </HStack> 
                <HStack marginBottom='-5%'>
                    <BsPlusCircle style={{cursor:'pointer'}} size={21} color="#666666"/> <Box p={4} borderBottom='1px' style={{cursor:'pointer'}} ><Text as='b' fontSize='14px' >English</Text></Box>
                </HStack>
          </div>
          <div className={style.d3}>
              <textarea onChange={handleInputChange} placeholder="What's on your mind?"></textarea>
              <div style={{backgroundColor:'white',padding:'24px',marginTop:'-2.5%',display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:'1%'}}>
                {file.map((filee, index) => (
                  <div key={index} style={{ position: 'relative' }}>
                    {/* <img key={index} src={URL.createObjectURL(filee)} alt="preview"  /> */}
                    {filee.fileData.type.startsWith('image/') ? (
                            <img src={filee.previewUrl} alt="preview" />
                            ) : (
                            <video width="400" height="120" controls>
                                  <source src={filee.previewUrl} type={filee.fileData.type} />
                            </video>
                    )}
                    <button style={{ position: 'absolute', top: 0, right: 3,backgroundColor:'#666666',borderRadius:'50%' }}
                            onClick={()=>{handleClose(index)}}>x</button>
                  </div>
                  ))}
              </div>
          </div>
          <div className={style.d4}> 
              <HStack >
                  <Box  className={style.s2}><HStack > <button onClick={()=>{handleButtonClick(0)}}> <ImImages style={{cursor:'pointer'}} size={21} color="#666666" /> </button> <Spacer /> <Spacer /><Spacer /><Spacer />
                                <button onClick={()=>{handleButtonClick(1)}}><RxVideo style={{cursor:'pointer'}} size={21} color="#666666"  /> </button><Spacer /> <Spacer /><Spacer />
                                <HiOutlineLink style={{cursor:'pointer'}} size={21} color="#666666" /><Spacer /> <Spacer /><Spacer />
                                <BsBarChart style={{cursor:'pointer'}} size={21} color="#666666" />
                  </HStack></Box>
                  <Box><HStack className={style.s3}> <FiSettings style={{cursor:'pointer'}} size={21} color="#666666"/>  
                                  <CircularProgress value={count/5} color={count>500? 'red.500': '#4b4b4b'} thickness='8px'> 
                                      <CircularProgressLabel>{count}</CircularProgressLabel>
                                  </CircularProgress>
                  </HStack></Box>
              </HStack> 
          </div>
          <div>
      <input ref={fileInputRef} type="file" accept="image/*" onChange={handleFileChange} multiple style={{ display: 'none' }} />
      <input ref={fileInputRef1} type="file" accept="video/*" onChange={handleFileChange} multiple style={{ display: 'none' }} />
    </div>
      </div>

      <Modal onClose={handleCloseModal} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{progressCount<=100? 'Updating Post...' : 'Post successfully updated.'}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <Progress hasStripe value={progressCount} />
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose} disabled={progressCount<100} bg={progressCount>=100? 'green.500' : 'red.500'} >{progressCount<=100? 'WAIT' : 'DONE'}</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  )
}

export default Create