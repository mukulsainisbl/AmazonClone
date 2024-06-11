import { Container } from '@chakra-ui/react'
import { Spinner } from '@chakra-ui/react'
const LoadingIndicator = () => {

  return (
   <Container justifyContent={"center"} display={"flex"}>
  <Spinner
  thickness='4px'
  speed='0.65s'
  emptyColor='gray.200'
  color='blue.500'
  size='xl'
/>

   </Container>
  )
}

export default LoadingIndicator