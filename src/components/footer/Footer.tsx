import {
  Grid,
  GridItem,
  List,
  ListItem,
  Stack,
  Text,
} from "@chakra-ui/react";
import { BsFacebook, BsTwitterX, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <Grid
      bg="#F3BDcf"
      gridTemplateColumns={{ base: "repeat(1,1fr)", md: "repeat(2,1fr)" }}
      color="#333"
      p="2rem"
      gap="3rem"
    >
      <GridItem>
        <Stack direction="column">
          <h1 style={{ color: "rgba(206, 68, 228, 1)", fontSize: "1.3rem" }}>
            Bakery
          </h1>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
          <Stack direction="row">
            <BsFacebook color="purple" />
            <BsTwitterX color="purple" />
            <BsInstagram color="purple" />
          </Stack>
        </Stack>
      </GridItem>
      <GridItem>
        <Grid gridTemplateColumns="repeat(2,1fr)">
            <List>
              <Text fontWeight='700'>OUR STORES</Text>
              <ListItem>SLOVAKIA</ListItem>
              <ListItem>CZECH REPUBLIC</ListItem>
              <ListItem>FINLAND</ListItem>
              <ListItem>POLAND</ListItem>
            </List>
            <List>
            <Text fontWeight='700'>USEFUL LINKS</Text>
              <ListItem>HOME</ListItem>
              <ListItem>PRIVANCY POLICY</ListItem>
              <ListItem>FINILAND</ListItem>
              <ListItem>CONTACT US</ListItem>
            </List>
          {/* </GridItem> */}
        </Grid>
      </GridItem>
    </Grid>
  );
};

export default Footer;
