import React from 'react'
import {Card,HStack,Box,Avatar, VStack,Text,Spacer,Image,Button} from "@chakra-ui/react";
import {Stack,InputGroup,InputLeftElement,Input,InputRightElement,Flex} from "@chakra-ui/react";
import { MdPersonAddAlt,MdMoreVert } from "react-icons/md";
import { SiAdguard } from "react-icons/si";
import { FcComboChart } from "react-icons/fc";
import { BiLike } from "react-icons/bi";
import { FaRegCommentAlt,FaWhatsapp} from "react-icons/fa";
import {RxLoop} from "react-icons/rx";
import {RiShareForwardLine} from "react-icons/ri";


function FeedPost({name,img,username,category,days,content,hastags,likes,comments,reKoo}) {
    const myHashTags = hastags.join(" ");
  return (
        <Card p={'2%'} m={'2%'} textAlign={'left'} >
           <Box >
            <HStack justifyContent={'space-between'}>
            <HStack><Avatar name={name} src={img} /> 
                    <VStack>
                        <HStack textAlign={'left'} marginBottom={'-5%'}><Text color={'#121212'} fontSize='16px' as='b'>{name}</Text><Box marginLeft={'41%'} marginTop={'-6%'} ><SiAdguard color='#ffbf00' /></Box></HStack>
                        <HStack ><Text color={'#888888'} fontSize='14px' >@{username}</Text><Text color={'#888888'} fontSize='14px'>{category}</Text></HStack>
                    </VStack>
            </HStack>
            <HStack><Text color={'#888888'} fontSize='14px' >{days}</Text>
                    <MdPersonAddAlt color={'#888888'} />
                    <MdMoreVert color={'#888888'} />
            </HStack>
            </HStack>
            <Box marginTop={'5%'} ><Text>{content.textContent}</Text></Box>
            <Box marginTop={'5%'}><Text color={'#1E63BD'}>{myHashTags}</Text></Box>
            <Box marginTop={'3%'}><Image src={content.imgContent}></Image></Box>
            <Box  marginTop={'2%'}><HStack>
                <Button color={'#121212'} backgroundColor={'#E8E8E3'}><Text fontSize='14px' >English</Text></Button>
                <Button color={'#888888'} backgroundColor={'#FFFFFF'} ><Text fontSize='14px' >हिन्दी</Text></Button>
                <Button color={'#888888'} backgroundColor={'#FFFFFF'}><Text fontSize='14px' >ಕನ್ನಡ</Text></Button>
                <Button color={'#888888'} backgroundColor={'#FFFFFF'}><Text fontSize='14px' >தமிழ்</Text></Button>
                <Button color={'#888888'} backgroundColor={'#FFFFFF'}><Text fontSize='14px' >తెలుగు</Text></Button>
                <Button color={'#888888'} backgroundColor={'#FFFFFF'}><Text fontSize='14px' >मराठी</Text></Button>
                <Button color={'#888888'} backgroundColor={'#FFFFFF'}><Text fontSize='14px' >বাংলা</Text></Button>
                <Box><FcComboChart/></Box>
            </HStack></Box>
            <Stack  marginTop={'2%'} padding="10px" spacing={4} >
              <InputGroup pointer="cursor" style={{backgroundColor:'#ffffff'}}>
                <InputLeftElement
                  children={
                    <div>
                      <Avatar src={Image} size="xs" ml={4} mr={2} />
                    </div>
                  }
                />
                <Spacer/><Spacer/><Spacer/>
                <Input type="text" placeholder="Write your comment..." color={'#CCCCCC'} fontSize='14px' />
              </InputGroup>
            </Stack>
            <Box  marginTop={'2%'} marginBottom={'2%'} color={'#666666'} fontSize='14px'><HStack justifyContent={'space-between'}>
                <Box><HStack><BiLike size={24}/><Text>{likes}</Text></HStack></Box>
                <Box><HStack><FaRegCommentAlt size={22}/><Text>{comments}</Text></HStack></Box>
                <Box><HStack><RxLoop size={24}/><Text>{reKoo}</Text></HStack></Box>
                <Box><FaWhatsapp size={24}/></Box>
                <Box><RiShareForwardLine size={24}/></Box>
            </HStack></Box>
           </Box>
        </Card>
  )
}

export default FeedPost