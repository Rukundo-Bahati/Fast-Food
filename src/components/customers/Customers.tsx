import { Grid, Image, Stack } from "@chakra-ui/react";
import heading from "../../assets/h3.png";
import user1 from "../../assets/user.png";
import user2 from "../../assets/user2.png";
import Customer from "../Customer";

const Customers = () => {
  return (
    <Stack style={{ background: "rgb(248, 204, 206)" }} justifyContent="center" alignItems='center'>
      <Image src={heading} w={"50%"} m="2rem" />

      <Grid
        gridTemplateColumns={{ base: "repeat(1,1fr)", md: "repeat(2,1fr)" }}
        gap="2rem"
        p="2rem"
        justifyContent="center"
        alignItems="center"
      >
        <Customer
          img={user1}
          name="Brianka P."
          city="Bratslavia,Slovakia"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
        />
        <Customer
          img={user2}
          name="Brianka P."
          city="Kigali, Rwanda"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
        />
      </Grid>
    </Stack>
  );
};

export default Customers;
