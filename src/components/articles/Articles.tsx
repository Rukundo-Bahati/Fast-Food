import { Image, Stack } from "@chakra-ui/react";
import heading from "../../assets/h2.png";
import food1 from "../../assets/bread1.png";
import food2 from "../../assets/bread2.png";
import food3 from "../../assets/bread3.png";
import Article from "../Article";

const Articles = () => {
  return (
    <Stack justifyContent="center" alignItems="center" bg="rgb(248, 204, 206)">
      <Image src={heading} w={"50%"} m="2rem" />
      <Stack direction={{base:"column", md: 'row' }} p="2rem" gap="2rem">
        <Article img={food1} text="How to make perfect cakes at home" />
        <Article img={food2} text="How to make perfect cakes at home" />
        <Article img={food3} text="How to make perfect cakes at home" />
      </Stack>
    </Stack>
  );
};

export default Articles;
