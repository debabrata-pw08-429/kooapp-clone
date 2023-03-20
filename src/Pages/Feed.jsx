import React, { useEffect, useState, useContext } from "react";
import LeftSidebar from "../Components/DummyLeftSidebar";
import RightSidebar from "../Components/DummyRightSidebar";
import Rsidebar from "../Components/Rsidebar";
import FeedCreate from "../Components/FeedCreate";
import { Flex, Box, Text, HStack } from "@chakra-ui/react";
import f from "../Styles/feed.module.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import ProfileComp from "../Components/ProfileComp";
import { getData } from "../Redux/PeopleDetails/action";
import FeedPost from "../Components/FeedPost";
import { Link } from "react-router-dom";
import { FeedContext } from "../Context/FeedContext";
import { SideBar } from "../Components/SideBar";

function Feed() {
  let dispatch = useDispatch();
  let { followstate, setFollowstate, idC, setidC, trueCount, setTrueCount } =
    useContext(FeedContext);
  console.log(followstate, "contextchecl");

  useEffect(() => {
    dispatch(getData(0));
    console.log("yyesss")
    setTrueCount (7);
    
  },[])
  
  let peopleData = useSelector(state=>state.PeopleReducer.peopleData);

  useEffect(()=>{
    console.log("222")
  },[followstate])

 
  
  let followData = useSelector(state=>state.PeopleReducer.followData)
  console.log(peopleData,"checking after like peopleData");
  return (
    <Box>
      <Flex w="100%">
        <Box w="26%" paddingLeft={'2%'}>
          {/* <LeftSidebar /> */}
          <SideBar />
        </Box>

        <Box w="42%" bg="#f8f7f3" p={"10px 12px 0px"} overflow={"hidden"}>
          <HStack
            p={"20px 10px"}
            alignItems="center"
            justifyContent={"space-between"}
            marginBottom="2px"
          >
            <button className={f.n1}>
              <Text as="b" fontSize="13px" color="#121212">
                Feed
              </Text>
            </button>
            <button bg={"#f8f7f3"}>
              <Text fontSize="13px" color="#888888">
                People
              </Text>
            </button>
            <button bg={"#f8f7f3"}>
              <Text fontSize="13px" color="#888888">
                Polls
              </Text>
            </button>
            <button bg={"#f8f7f3"}>
              <Text fontSize="13px" color="#888888">
                Videos
              </Text>
            </button>
            <button bg={"#f8f7f3"}>
              <Text fontSize="13px" color="#888888">
                New
              </Text>
            </button>
            <button bg={"#f8f7f3"}>
              <Text fontSize="13px" color="#888888">
                People
              </Text>
            </button>
            <button bg={"#f8f7f3"}>
              <Text fontSize="13px" color="#888888">
                Following
              </Text>
            </button>
            <button bg={"#f8f7f3"}>
              <Text fontSize="13px" color="#888888">
                Popular
              </Text>
            </button>
          </HStack>
          <FeedCreate />

          {trueCount >= 5 && (
            <>
              <HStack
                p={"20px 10px"}
                alignItems="center"
                justifyContent={"space-between"}
                marginBottom={"2%"}
                marginTop={"-3%"}
              >
                <Text as="b" fontSize="18px" color="#1A202C">
                  People you can follow
                </Text>
                <Link to="/people">
                  <AiOutlineArrowRight size={22} />
                </Link>
              </HStack>

          
          <HStack marginTop={'-3%'} marginLeft={'2%'} marginBottom={'5%'}  >
            { 
            peopleData.map((e)=>{
                let {name,category,img,userFollowState,id}=e;
                return <ProfileComp id1={id} name={name} category={category} img={img} userFollowState={userFollowState} setTrueCount={setTrueCount}/>
            })}
          </HStack></>
          )}


          {peopleData.map((e)=>{
                let {name,username,category,img,posts,userFollowState,id}=e;
                return (<div >
                {posts.map((e)=>{
                  
                  let {postsID,days,content,hastags,likes,comments,reKoo,userLike}=e;
                  
                  return <FeedPost id1={id} postsID={postsID} name={name} category={category}  userLike={userLike} img={img} userFollowState={userFollowState} username={username} days={days} content={content} hastags={hastags} likes={likes} comments={comments} reKoo={reKoo}/>
                })}
                </div>)
            })}


         
        </Box>

        <Box w="32%" paddingRight={'6%'}    >
          {/* <RightSidebar />{" "} */}
          <Rsidebar/>
        </Box>

      </Flex>
    </Box>
  );
}

export default Feed;
