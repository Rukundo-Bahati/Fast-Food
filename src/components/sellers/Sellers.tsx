import { Image, Stack } from "@chakra-ui/react";
import heading from "../../assets/l&h.png";
import CardItem from "../CardItem";
import food1 from "../../assets/ckl1.png";
import food2 from "../../assets/ckl2.png";
import food3 from "../../assets/ckl3.png";

const Sellers = () => {
  return (
    <Stack justifyContent="center" alignItems="center" bg="rgb(248, 204, 206)">
      <Image src={heading} w={"50%"} m="2rem" />

      <Stack
        direction={{ base: "column", md: "row" }}
        justifyContent="center"
        gap="2rem"
        p="5rem"
      >
        <CardItem img={food1} />
        <CardItem img={food2} />
        <CardItem img={food3} />
      </Stack>
    </Stack>
  );
};

export default Sellers;
