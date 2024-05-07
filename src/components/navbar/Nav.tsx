import { ButtonGroup, Flex, Link, Spacer, Stack } from "@chakra-ui/react";
import { BsHeart, BsBasket } from "react-icons/bs";

const Nav = () => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      bg="white"
      p="1.5rem"
      mx="2rem"
      style={{
        boxShadow: "0px 8px 16.3px 0px rgba(206, 11, 255, 0.25)",
        borderBottomLeftRadius: "7px",
        borderBottomRightRadius: "7px",
        position: "sticky",
       top: "0" 
      }}
      // w="100%"
    >
      <h1 style={{ color: "rgba(206, 68, 228, 1)", fontSize: "1.3rem" }}>
        Bakery
      </h1>
      <Spacer />
      <Stack
        display={{ base: "none", md: "flex" }}
        direction="row"
        style={{ color: "rgba(40, 40, 40, 1)" }}
        gap="2rem"
      >
        <Link>Home</Link>
        <Link>Services</Link>
        <Link>Blog</Link>
        <Link>Shop</Link>
      </Stack>
      <Spacer />
      <Stack
        display={{ base: "none", md: "flex" }}
        direction="row"
        justifyContent="center"
        alignItems="center"
        style={{ color: "rgba(40, 40, 40, 1)" }}
      >
        <ButtonGroup>
          <Link>Login</Link>
          <Link>Register</Link>
        </ButtonGroup>

        <Stack direction="row">
          <BsHeart />
          <BsBasket />
        </Stack>
      </Stack>
    </Flex>
  );
};

export default Nav;
