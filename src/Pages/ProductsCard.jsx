import {
  Image,
  Box,
  Card,
  Text,
  ButtonGroup,
  Button,
  Stack,
  Heading,
  CardBody,
  CardFooter,
  Container,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
const ProductsCard = ({ id, title, price, image }) => {
const navigate = useNavigate()


  return (
    <Container >
      <Card padding={2} alignItems={"center"} maxW={"280px"} margin={6}>
        <CardBody>
          <Box
            width="150px"
            height="150px"
           margin={"auto"}
          >
            <Image src={image} alt={title} maxW="100%" maxH="100%" />
          </Box>
          <Stack mt="6" spacing="3">
            <Heading fontSize={"sm"}>Title : {title}</Heading>
            <Text color="blue.600" fontSize="lg">
              Price : ${price}
            </Text>
          </Stack>
        </CardBody>
        <CardFooter>
          <ButtonGroup spacing="3">
            <Button onClick={ () => navigate(`/products/view/${id}`)} variant="solid" colorScheme="blue">
              Buy now
            </Button>
            <Button variant="outline" colorScheme="blue">
              Add to cart
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </Container>
  );
};

export default ProductsCard;
