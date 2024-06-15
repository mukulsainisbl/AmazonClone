import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Image,
  Box,
  Card,
  Text,
  Button,
  Stack,
  Heading,
  CardBody,
  CardFooter,
  Container,
  Center,
} from "@chakra-ui/react";
import Header from "./Header";
import LoadingIndicator from "../components/LoadingIndicator";
import ErrorIndicator from "../components/ErrorIndicator";

const ProductsView = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // Import and use navigate correctly
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function getSingleProduct() {
    setLoading(true)
    try {
      let res = await axios({
        method: "get",
        url: `https://fakestoreapi.com/products/${id}`,
      });
      setProduct(res.data);
      setLoading(false)
    } catch (error) {
      console.log(error);
      setError(true)
      setLoading(false)

    }
  }

  useEffect(() => {
    getSingleProduct();
  }, [id]);

  if (loading) {
    return <LoadingIndicator/>
  }

  if (error) {
    return <ErrorIndicator/>
  }

  const { title, image, price, description, category, rating } = product;

  return (
    <>
      <Header />
      <Container  maxW={"2xl"}>
        <Heading textAlign={"center"}>Product Details</Heading>
        <Center>
          <Card border={"1px solid black"} padding={2} alignItems={"center"} maxW={"2xl"} maxH={"200px"}>
            <CardBody >
              <Box width="250px" height="150px" margin={"auto"}>
                {image ? (
                  <Image src={image} alt={title} maxW="100%" maxH="100%" />
                ) : (
                  <Text>No Image Available</Text>
                )}
              </Box>
              <Stack mt="6" spacing="3">
                <Heading fontSize={"15px"}>Title: {title}</Heading>
                <Text color="blue.600" fontSize="lg">
                  Price: ${price}
                </Text>
                <Text>Description: {description}</Text>
                <Text>Category: {category}</Text>
                <Text>
                  Rating: {rating?.rate} ({rating?.count} reviews)
                </Text>
              </Stack>
            </CardBody>
            <CardFooter>
              <Button variant="outline" colorScheme="blue">
                Add to cart
              </Button>
            </CardFooter>
          </Card>
        </Center>
      </Container>
    </>
  );
};

export default ProductsView;
