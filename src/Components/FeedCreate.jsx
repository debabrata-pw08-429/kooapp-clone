import React from "react";
import {Text,Avatar,Stack,InputGroup,InputLeftElement,Input,InputRightElement,Flex,Box,} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { AiFillPlusCircle } from "react-icons/ai";
import { useSelector } from "react-redux";

function FeedCreate() {
    // let { Image } = useSelector((state) => state.LoggedReducer);
    let Image='https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61nlaq18GGL._SY679_.jpg';
  return (
    <div style={{pointer:'cursor'}}>
        <Link to="/create">
            <Stack padding="10px" spacing={4} >
              <InputGroup pointer="cursor" style={{backgroundColor:'#ffffff'}}>
                <InputLeftElement
                  children={
                    <div>
                      <Avatar src={Image} size="xs" ml={4} mr={2} />
                    </div>
                  }
                />
                <Input type="text" placeholder="What's on your mind?" color={'#CCCCCC'} fontSize='14px' pointer="cursor" />
                <InputRightElement
                  children={
                    <AiFillPlusCircle size={19} style={{ fill: "#474747" }} />
                  }
                />
              </InputGroup>
            </Stack>
          </Link>
    </div>
  )
}

export default FeedCreate