import "../Pages/Home.css";
import axios from "axios";
import { useEffect, useState } from "react";
import ProductsCard from "./ProductsCard";
import { Container, SimpleGrid } from "@chakra-ui/react";
import Header from "./Header";
import LoadingIndicator from "../components/LoadingIndicator";
import ErrorIndicator from "../components/ErrorIndicator";
import Footer from "./Footer";
const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  async function getData() {
    setLoading(true);
    setError(false);
    try {
      const res = await axios({
        method: "get",
        url: `https://fakestoreapi.com/products`,
      });
      setProducts(res.data);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  if (loading) {
    return <LoadingIndicator/>
  }

  if (error) {
    return <ErrorIndicator/>
  }

  return (
    <div className="home">
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} /> 
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/harsmisc/2024/5299-HI---HMD---Hero---May-8-UN-REC-BAU_Pc_1._CB554790996_.jpg"
          alt=""
        />
      </div>

      
        <Container border={"3px solid black"} maxW={"8xl"} >
            <SimpleGrid columns={{base:"1",md:"2",lg:"4"}}>
          {filteredProducts.map((product) => (
            <ProductsCard key={product.id} {...product} />
          ))}
        </SimpleGrid>
        </Container>
        
      <Footer/>
    </div>
  );
};

export default Home;
