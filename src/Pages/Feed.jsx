import React, { useEffect } from "react";
import LeftSidebar from "../Components/DummyLeftSidebar";
import RightSidebar from "../Components/DummyRightSidebar";
import FeedCreate from "../Components/FeedCreate";
import {Flex,Box,Text,HStack} from "@chakra-ui/react";
import f from "../modules/feed.module.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useSelector,useDispatch } from 'react-redux'
import ProfileComp from "../Components/ProfileComp";
import { getData } from "../Redux/PeopleDetails/action";
import FeedPost from "../Components/FeedPost";

function Feed() {
  let dispatch=useDispatch();
  useEffect(()=>{
    dispatch(getData());
  },[])

  let peopleData = useSelector(state=>state.PeopleReducer.peopleData)
  return (
    <div>
      <Flex w="100%">
        <Box w="26%" mt="50px">
          <LeftSidebar />
        </Box>
        <Box w="42%"  bg="#f8f7f3" border="2px solid black" p={'10px 12px 0px'} overflow="hidden"> 
          <HStack p={'20px 10px'} alignItems='center' justifyContent={"space-between"} marginBottom='2px'>
            <button className={f.n1} ><Text as='b' fontSize='13px' color='#121212'  >Feed</Text></button>
            <button bg={'#f8f7f3'}><Text fontSize='13px' color='#888888'>People</Text></button>
            <button bg={'#f8f7f3'}><Text fontSize='13px' color='#888888'>Polls</Text></button>
            <button bg={'#f8f7f3'}><Text fontSize='13px' color='#888888'>Videos</Text></button>
            <button bg={'#f8f7f3'}><Text fontSize='13px' color='#888888'>New</Text></button>
            <button bg={'#f8f7f3'}><Text fontSize='13px' color='#888888'>People</Text></button>
            <button bg={'#f8f7f3'}><Text fontSize='13px' color='#888888'>Following</Text></button>
            <button bg={'#f8f7f3'}><Text fontSize='13px' color='#888888'>Popular</Text></button>
          </HStack>
          <FeedCreate />
          <HStack p={'20px 10px'} alignItems='center' justifyContent={"space-between"} marginBottom={'2%'} marginTop={'-3%'}>
              <Text as='b' fontSize='18px' color='#1A202C'>People you can follow</Text>
              <AiOutlineArrowRight size={22}/>
          </HStack>

          <HStack marginTop={'-3%'} marginLeft={'2%'} marginBottom={'5%'}>
            {peopleData.map((e)=>{
                let {name,category,img}=e;
                return <ProfileComp name={name} category={category} img={img}/>
            })}
          </HStack>


          {peopleData.map((e)=>{
                let {name,username,category,img,posts}=e;
                return (<div >
                {posts.map((e)=>{
                  let {days,content,hastags,likes,comments,reKoo}=e;
                  return <FeedPost name={name} category={category} img={img} username={username} days={days} content={content} hastags={hastags} likes={likes} comments={comments} reKoo={reKoo}/>
                })}
                </div>)
            })}









         
        </Box>

        <Box w="32%" mt="50px">
          <RightSidebar />{" "}
        </Box>
      </Flex>
    </div>
  );
}

export default Feed;
