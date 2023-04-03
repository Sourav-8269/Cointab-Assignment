import { Box, Text,Heading,Button } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const user=JSON.parse(localStorage.getItem("user-data"))||{};
  const navigate=useNavigate();
  console.log(user)

  const handleLogout=()=>{
    localStorage.removeItem("user-data");
    navigate("/");
  }
  return (
    <Box>
        <Heading textAlign={"center"} mt="2%" >Home Page</Heading>
        <Box m="auto" mt="4%" w="50%" p="3%" borderRadius="10px" boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px" >
          <Text fontSize="3xl" >{user.token?`Hi ${user.user}` : "Please Login First"}</Text>
          <Button colorScheme='messenger' mt="2%" onClick={handleLogout} >{user.token?`Log out` : "Sign in"}</Button>

        </Box>
    </Box>
  )
}

export default Home