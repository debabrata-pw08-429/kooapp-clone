import React from 'react'
import {Card,CardBody,Image,Stack,Heading,Text,Button,Box} from "@chakra-ui/react";
import { SiAdguard} from "react-icons/si";


function ProfileComp({name,category,img}) {
  return (
    <div>
        <Card alignItems='center'  height={'12em'} width={'130px'} >
            <CardBody alignItems='center' justify-Content='Center' p='6px 16px'>
                <Image
                src={img}
                alt=''
                borderRadius='50%' width='80px' height='80px'
                />
                <Box marginLeft={'41%'} marginTop={'-6%'} marginBottom={'5%'}><SiAdguard color='#ffbf00' /></Box>
                <Stack spacing='3'>
                <p style={{fontSize:'14px',lineHeight:'1.0',fontWeight:'bold'}}>{name}</p>
                <Text color='#888888' fontSize='12px'>{category}</Text>
                </Stack>
            </CardBody>
            <Button variant='solid' bg='#4b4b4b' colorScheme='#4b4b4b' borderRadius='20px' position='relative' bottom='-10px' height={'26px'} width={'79px'} fontSize= '12px'>Follow +</Button>
        </Card>
    </div>
  )
}

export default ProfileComp;