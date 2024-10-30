import { Flex, GridItem, Image, Stack, Text } from "@chakra-ui/react";
import Circle from "../Circle"; // Adjust the import path based on your project structure
import cake1 from "../../assets/cake1.png";
import cake2 from "../../assets/cake2.png";
import cake3 from "../../assets/cake3.png";
// import bg from "../../assets/collections-img.png";
import row from "../../assets/Group 795.png";

import "./colle.css";

const Collection = () => {
  return (
    <Flex
      className="coll"
      // direction="row"
      p="5rem"
      justifyContent="space-between"
      alignItems="center"
      gap={{base: "2rem" ,md: '34rem' }}
      direction={{ base: "column", md: "row" }}
    >
      <GridItem>
        <Text color="rgba(40, 40, 40, 1)">See Collection</Text>
        <Text color="#E35050" fontWeight="600">
          OUR FINE HOME MADE CHOCOLATES
        </Text>
      </GridItem>
      <GridItem>
        <div>
          <Image src={row} w="70%" />
          <Stack direction="row" gap="1rem">
            <Circle>
              <Image src={cake1} />
            </Circle>

            <Circle>
              <Image src={cake2} />
            </Circle>

            <Circle>
              <Image src={cake3} />
            </Circle>
          </Stack>
          <Stack direction="row" w="76%">
            <Text color="rgba(40, 40, 40, 1)">
              There are some redeming factors in greeking text
            </Text>
            <Text color="rgba(40, 40, 40, 1)">
              There are some redeming factors in greeking text
            </Text>
            <Text color="rgba(40, 40, 40, 1)">
              There are some redeming factors in greeking text
            </Text>
          </Stack>
        </div>
      </GridItem>
    </Flex>
  );
};

export default Collection;
