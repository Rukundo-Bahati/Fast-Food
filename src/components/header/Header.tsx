import {
  Button,
  Grid,
  GridItem,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { BsFacebook, BsTwitterX, BsInstagram } from "react-icons/bs";
import Nav from "../navbar/Nav";
import homeImage from "../../assets/img.png";

const Header = () => {
  return (
    <div style={{ background: "rgb(248, 204, 206)" }}>
      <Nav />
      <Grid
        gridTemplateColumns={{ base: "repeat(1,1fr)", md: "repeat(2,1fr)" }}
        style={{ padding: "2rem" }}
        alignItems="center"
        justifyContent="center"
      >
        <GridItem>
          <Heading style={{ color: "purple" }}>
            Sweet moments, <br /> freshly baked with <br /> love
          </Heading>
          <Text
            style={{
              color: "rgba(40, 40, 40, 1)",
              marginTop: "12px",
              fontSize: "20px",
              fontFamily: "'Montserrat', sans-serif;",
            }}
          >
            Customized cakes, treats and every thing sweet for all your special
            moments.
          </Text>
          <Button
            my="1.2rem"
            style={{ background: "rgba(151, 52, 153, 1)", color: "#fff" }}
          >
            Shop now
          </Button>
          <Stack direction="row">
            <BsFacebook color="purple" />
            <BsTwitterX color="purple" />
            <BsInstagram color="purple" />
          </Stack>
        </GridItem>
        <GridItem>
          <Image src={homeImage} />
        </GridItem>
      </Grid>
    </div>
  );
};

export default Header;
