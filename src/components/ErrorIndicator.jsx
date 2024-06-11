import { Container } from "@chakra-ui/react";
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
  } from '@chakra-ui/react'
const ErrorIndicator = () => {
  return <Container display={"flex"} justifyContent={"center"}>
     <Alert status='error'>
    <AlertIcon />
    There was an error processing your request
  </Alert>
  </Container>;
};

export default ErrorIndicator;
