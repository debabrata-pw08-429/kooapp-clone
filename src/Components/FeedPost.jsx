import React, { useEffect } from 'react'
import {Card,HStack,Box,Avatar, VStack,Text,Spacer,Image,Button} from "@chakra-ui/react";
import {Stack,InputGroup,InputLeftElement,Input,InputRightElement,Flex} from "@chakra-ui/react";
import { MdPersonAddAlt,MdMoreVert } from "react-icons/md";
import { SiAdguard } from "react-icons/si";
import { FcComboChart } from "react-icons/fc";
import { BiLike } from "react-icons/bi";
import { FaRegCommentAlt,FaWhatsapp} from "react-icons/fa";
import {RxLoop} from "react-icons/rx";
import {RiShareForwardLine} from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { putData,redData} from "../Redux/PeopleDetails/action"
import { putData1} from "../Redux/PostDetails/action"
import { useSelector,useDispatch} from 'react-redux'

function FeedPost({id1,postsID,name,img,username,category,days,content,hastags,likes,comments,reKoo,userFollowState,userLike,Image1,user}) {
    let myHashTags;
    if (hastags!=""){
      myHashTags = hastags.join(" ");
    }
    const navigate = useNavigate();
    const dispatch=useDispatch();
    let peopleData = useSelector(state=>state.PeopleReducer.peopleData);
    let userPostData = useSelector(state=>state.userPostReducer.userPostData);
    // console.log(content.vdoContent,"vdooodv")
    const redirect =()=>{
      // console.log("prroofileee calleded");
      navigate(`/profile/${username}`);
    }
    let IncreaseCount =()=>{
      if (user==false){
        if (userLike==false){
          likes=likes+1;
          userLike=true;
          // console.log(likes,"L");
          let q=-1;
          let x = [
            ...peopleData.map((e,idx) => {
              if (e.id === id1) {
                q=idx;
                return {
                  ...e,
                  posts: e.posts.map((e1) => {
                    if (e1.postsID === postsID) {
                      return {
                        ...e1,
                        likes: likes,
                        userLike: true,
                      };
                    } else {
                      return e1;
                    }
                  }),
                };
              } 
                  // else {
          //       return e;
          //     }
            }),
          ];
          // console.log(x);
          // console.log(q,"qqqq")
          // console.log(x[q],"changedddd")
          let send=x[q];
          dispatch(putData(send,id1));
          // dispatch(redData(x))
        }
        else{
          likes=likes-1;
          userLike=false;
          // console.log(likes,"L");
          let q=-1;
          let x = [
            ...peopleData.map((e,idx) => {
              if (e.id === id1) {
                q=idx;
                return {
                  ...e,
                  posts: e.posts.map((e1) => {
                    if (e1.postsID === postsID) {
                      return {
                        ...e1,
                        likes: likes,
                        userLike: false,
                      };
                    } else {
                      return e1;
                    }
                  }),
                };
              } 
                  // else {
          //       return e;
          //     }
            }),
          ];
          // console.log(x);
          // console.log(q,"qqqq")
          // console.log(x[q],"changedddd")
          let send=x[q];
          dispatch(putData(send,id1));
          // dispatch(redData(x))
        }
      }
      else{
        console.log(userPostData,"userPostData at feed post for user if condtion");
        console.log("userLike",userLike)
        if (userLike==false){
          likes=likes+1;
          userLike=true;
          let q=-1;
          let x=[
            ...userPostData.map((e,idx) => {
              if (e.id === id1) {
                console.log("in")
                // q=idx;
                return {
                  ...e
                };
              }
            }),
          ]
          console.log(x[0]);
          x[id1+1].data.likes = likes;
          x[id1+1].data.userLike=true;
          console.log(likes,"likes mine");
          console.log(x[0],"senddd");
          
          // dispatch(putData1(x,id1));
        }else{
          likes=likes-1;
          userLike=false;
          let q=-1;
          let x=[
            ...userPostData.map((e,idx) => {
              if (e.id === id1) {
                console.log("in")
                // q=idx;
                return {
                  ...e
                };
              }
            }),
          ]
          x[id1+1].data.likes = likes;
          x[id1+1].data.userLike=false;
          
          console.log(likes,"likes mine");
          console.log(x);
          // dispatch(putData1(x,id1));
        }
      }
    }
    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        autoplay: 1,
        controls: 0,
        modestbranding: 1,
        showinfo: 0,
      },
    };

    useEffect(()=>{
        // console.log("render")
    },[likes])

  return userFollowState == false ? (
        <Card p={'2%'} m={'2%'} textAlign={'left'} >
           <Box >
            <HStack justifyContent={'space-between'}>
            <HStack onClick={redirect} style={{ cursor: 'pointer' }}><Avatar name={name} src={img} /> 
                    <VStack >
                        <HStack alignSelf='start' marginBottom={'-5%'}><Text color={'#121212'} fontSize='16px' as='b'>{name}</Text><Box marginLeft={'41%'} marginTop={'-6%'} ><SiAdguard color='#ffbf00' /></Box></HStack>
                        <HStack alignSelf='start' ><Text color={'#888888'} fontSize='14px' >@{username}</Text><Text color={'#888888'} fontSize='14px'>{category}</Text></HStack>
                    </VStack>
            </HStack>
            <HStack><Text color={'#888888'} fontSize='14px' >{days}</Text>
                    {userFollowState == true ? <MdPersonAddAlt color={'#888888'} /> : <></>}
                    <MdMoreVert color={'#888888'} />
            </HStack>
            </HStack>
            <Box marginTop={'5%'} ><Text>{content.textContent}</Text></Box>
            <Box marginTop={'5%'} style={{ cursor: 'pointer' }} ><Text color={'#1E63BD'}>{myHashTags}</Text></Box>
            <Box marginTop={'3%'}><Image maxHeight={'500px'} width={'100%'} src={content.imgContent} style={{ cursor: 'pointer' }}></Image>
            {/* {console.log(content.vdoContent,"vdeo in vdo space")} */}
                        {content.vdoContent !== undefined && (
                            
                              <video width="600" height="150" controls>
                                <source src={content.vdoContent} type="video/mp4" />
                            </video>
                            
                        )}
            </Box>
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
                      <Avatar src={Image1} size="xs" ml={4} mr={2} />
                    </div>
                  }
                />
                <Spacer/><Spacer/><Spacer/>
                <Input type="text" placeholder="Write your comment..." color={'#CCCCCC'} fontSize='14px' />
              </InputGroup>
            </Stack>
            <Box  marginTop={'2%'} marginBottom={'2%'} color={'#666666'} fontSize='14px'><HStack justifyContent={'space-between'}>
                <Box style={{ cursor: 'pointer' }}><HStack><BiLike size={24} onClick={IncreaseCount} fill={userLike===true? 'red': ''} /><Text >{likes}</Text></HStack></Box>
                <Box style={{ cursor: 'pointer' }}><HStack><FaRegCommentAlt size={22} /><Text>{comments}</Text></HStack></Box>
                <Box style={{ cursor: 'pointer' }}><HStack><RxLoop size={24}/><Text>{reKoo}</Text></HStack></Box>
                <Box style={{ cursor: 'pointer' }}><FaWhatsapp size={24}/></Box>
                <Box style={{ cursor: 'pointer' }}><RiShareForwardLine size={24}/></Box>
            </HStack></Box>
           </Box>
        </Card>
  ):(
    <div></div>
  )
}

export default FeedPost