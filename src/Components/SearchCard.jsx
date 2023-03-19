import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const UserComponent = ({ ele }) => {
  let navigate = useNavigate();

  return (
    <Flex
      p="0.5em"
      w="100%"
      alignItems="center"
      boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
      onClick={() => navigate(`/profile${ele.name}`)}
    >
      <Avatar size="sm" src={ele.img} />
      <Box w="90%">
        <Flex
          fontSize="14px"
          fontWeight="600"
          color="gray.600"
          w="16vw"
          pl="8px"
          alignItems="start"
          flexDirection="column"
        >
          <Text maxW="90%" overflow="hidden" textOverflow="ellipsis">
            {ele.name}
          </Text>
          <Text
            fontSize="12px"
            color="gray.500"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
            overflow="hidden"
          >
            @{ele.username}
          </Text>
        </Flex>
      </Box>
    </Flex>
  );
};

export default UserComponent;
