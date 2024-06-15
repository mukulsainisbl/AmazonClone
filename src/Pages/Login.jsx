import {
  Container,
  Stack,
  Input,
  InputGroup,
  Button,
  InputRightElement,
  Heading,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";

const Login = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleClick = () => setShow(!show);

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = async () => {
    try {
      const res = await axios.post('https://reqres.in/api/login', {
        email,
        password
      });
      
    } catch (error) {
      console.error("Login failed:", error);
      setError("Login failed. Please check your credentials and try again.");
    }
  };

  return (
    <Container
      boxShadow={"10px 10px lightblue"}
      border={"1px solid black"}
      height={"50vh"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
    >
      <Stack spacing={5}>
        <Heading size={"2xl"} textAlign={"center"}>Login</Heading>
        <Input
          placeholder="Enter email"
          size="lg"
          value={email}
          onChange={handleEmailChange}
        />
        <InputGroup size="lg">
          <Input
            pr="4.5rem"
            type={show ? "text" : "password"}
            placeholder="Enter password"
            value={password}
            onChange={handlePasswordChange}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "😒" : "😁"}
            </Button>
          </InputRightElement>
        </InputGroup>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <Button margin={"auto"} width={"20%"} onClick={handleSubmit}>Login</Button>
      </Stack>
    </Container>
  );
};

export default Login;
