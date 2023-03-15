import React, { useState } from "react";
import {Box, Button, Flex,HStack,Image, Modal, ModalBody, ModalCloseButton, ModalContent,ModalHeader, ModalFooter, ModalOverlay, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, Portal, Spacer, Text, useDisclosure} from '@chakra-ui/react'
import '../Styles/sidebar.css'
import koo from'../Images/koo.svg'
import feedIcon from'../Images/feed.svg'
import hashtag from '../Images/hashtag.svg'
import lang from '../Images/lang.svg'
import search from '../Images/search.svg'
import acct from '../Images/acct.svg'
import dropdown from '../Images/dropdown.svg'
import logout from '../Images/logout.svg'
import notifications from '../Images/notifications.svg'

const SideBar = () => {
  const[isAuth,setIsAuth]=useState(true)
  const { isOpen, onOpen, onClose } = useDisclosure()
  return(
    <Box className="sidebar-main" w='350px' >
       <Flex  direction="column" m='20px'>
          <Box w='163px' h='73px'>
              <Image            
              className="kooLogo"
                src={koo}
                alt="mainlogo"
              />
          </Box>
          <Flex direction="column"  justifyContent='center' mt='35px' mb='20px'>
            <Box textAlign='left'  m=' 8px' h='48px'>
                <Button color='rgb(136,136,136)' border='none' bg='white' _hover={{ bg: '#ebedf0' }} w='150px' h='48px'  justifyContent="flex-start"  borderRadius='50px' >
                  < Image src={feedIcon} alt="" marginRight='8px'/>
                  Feed
                </Button>
            </Box>
            <Box textAlign='left'  m=' 8px' h='48px' display={isAuth? 'block':'none'}>
                <Button color='rgb(136,136,136)' border='none' bg='white' _hover={{ bg: '#ebedf0' }} w='150px' h='48px'  justifyContent="flex-start"  borderRadius='50px' >
                  < Image src={acct} alt="" marginRight='8px'/>
                  Keerthi Malini
                </Button>
                <Popover>
                  <PopoverTrigger>
                    <Button color='rgb(136,136,136)' border='none' bg='white'>
                     <Image src={dropdown}/>
                    </Button>
                  </PopoverTrigger>
                  <Portal>
                    <PopoverContent  w='150px' h='40px' boxShadow='0 0 10px rgb(136,136,136)' borderRadius='15px' textAlign='center'>
                      <PopoverArrow />
                      <PopoverBody>
                        <Button color='rgb(136,136,136)' border='none' bg='white'>Add Account +</Button>
                      </PopoverBody>
                    </PopoverContent>
                  </Portal>
                </Popover>
            </Box>
            <Box textAlign='left'  m=' 8px' h='48px'> 
                <Button color='rgb(136,136,136)' border='none' bg='white' _hover={{ bg: '#ebedf0' }} w='150px' h='48px'  justifyContent="flex-start" borderRadius='50px' >
                  <Image src={hashtag} alt="" marginRight='8px'/>  
                  Explore
                </Button>
            </Box>
            <Box textAlign='left'  m=' 8px' h='48px'> 
                <Button color='rgb(136,136,136)' border='none' bg='white' _hover={{ bg: '#ebedf0' }} w='150px' h='48px'  justifyContent="flex-start" borderRadius='50px' >
                  <Image src={lang} alt="" marginRight='8px'/>
                  Language
                </Button>
            </Box>
            <Box textAlign='left'  m=' 8px' h='48px'> 
                <Button color='rgb(136,136,136)' border='none' bg='white' _hover={{ bg: '#ebedf0' }} w='150px' h='48px'  justifyContent="flex-start"  borderRadius='50px' >
                  <Image src={search} alt=""  marginRight='8px' />  
                  Search
                </Button>
            </Box>
            <Box textAlign='left'  m=' 8px' h='48px' display={isAuth? 'block':'none'}> 
                <Button color='rgb(136,136,136)' border='none' bg='white' _hover={{ bg: '#ebedf0' }} w='150px' h='48px'  justifyContent="flex-start"  borderRadius='50px' >
                  <Image src={notifications} alt=""  marginRight='8px' />  
                  Notifications
                </Button>
            </Box>
            <Box textAlign='left'  m=' 8px' h='48px' display={isAuth? 'block':'none'}> 
                <Button onClick={onOpen} color='rgb(136,136,136)' border='none' bg='white' _hover={{ bg: '#ebedf0' }} w='150px' h='48px'  justifyContent="flex-start"  borderRadius='50px' >
                  <Image src={logout} alt=""  marginRight='8px' />  
                  Logout
                </Button>
                <Modal isOpen={isOpen} onClose={onClose} isCentered size='xs'>
                  <ModalOverlay />
                  <ModalContent>
                    <ModalBody textAlign='center' color='rgb(75,75,75)' fontSize='20px' >
                    Do you want to Log out?
                    </ModalBody>
                    <ModalFooter display='flex' justifyContent='space-evenly'>
                      <Button w='80px' h='32px' borderRadius='50px'  border='1px solid rgb(75,75,75)' color='rgb(75,75,75)' bg='white'  onClick={onClose}>
                        No
                      </Button>
                      <Button  w='80px' h='32px' borderRadius='50px' bg='rgb(75,75,75)' color='white' onClick={()=>{
                        onClose();
                        setIsAuth(false) 
                        }}>Yes</Button>
                    </ModalFooter>
                  </ModalContent>
              </Modal>
            </Box>
          </Flex>
          <Flex direction="column"  justifyContent='center'>
            <Button mb={isAuth? '0':'80px'} bg='rgb(75,75,75)' color='white' border='none' borderRadius='50px' p='8px' fontSize='19px' w='195px' h='48px' >
              + Koo
            </Button>
            <Button onClick={()=>{setIsAuth(true)}}display={isAuth? 'none':'block'} bg='rgb(75,75,75)' color='white' border='none' borderRadius='50px' p='8px' fontSize='19px' w='195px' h='48px'>
              Sign In
            </Button>
          </Flex>
          
   </Flex>
   </Box>
  )
};
export { SideBar };
