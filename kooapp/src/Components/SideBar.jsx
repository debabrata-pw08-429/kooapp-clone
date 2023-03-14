import React from "react";
import {Box, Button, Flex,HStack,Image, Text} from '@chakra-ui/react'
import '../Styles/sidebar.css'
import koo from'../Images/koo.svg'
import feedIcon from'../Images/feed.svg'
import hashtag from '../Images/hashtag.svg'
import lang from '../Images/lang.svg'
import search from '../Images/search.svg'
const SideBar = () => {
  return(
    <Box className="sidebar-main">
   <Flex  direction="column" m='20px'>
          <Box w='153px' h='73px'>
              <Image            
              className="kooLogo"
                src={koo}
                alt="mainlogo"
              />
          </Box>
          <Flex direction="column"  justifyContent='center' mt='35px' mb='20px'>
              <HStack m='8px' h='48px'>
                  < Image src={feedIcon} alt="" marginRight='4px'/>
                  <Text>Feed</Text>
              </HStack>
              <HStack m='8px' h='48px'>
                  <Image src={hashtag} alt="" marginRight='4px'/>  
                  <Text>Explore</Text>
              </HStack>
              <HStack m='8px' h='48px'>
                  <Image src={lang} alt="" marginRight='4px'/>
                  <Text>Language</Text>
              </HStack>
              <HStack m='8px' h='48px'>
                  <Image src={search} alt="" marginRight='4px' />  
                  <Text>Search</Text>
              </HStack>
          </Flex>
          <Flex direction="column"  justifyContent='center'>
            <Button bg='rgb(75,75,75)' color='white' border='none' borderRadius='50px' p='8px' fontSize='19px' w='195px' h='48px' mb='80px'>
              +Koo
            </Button>
            <Button bg='rgb(75,75,75)' color='white' border='none' borderRadius='50px' p='8px' fontSize='19px' w='195px' h='48px'>
              Sign In
            </Button>
          </Flex>
          
   </Flex>
   </Box>
  )
};
export { SideBar };
