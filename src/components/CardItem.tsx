import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

const CardItem = ({ img }) => {
  return (
    <Card
      maxW={{ base: "100%", md: "25%" }}
      boxShadow="0 0  15px #888"
      bg="#F3BDcf"
    >
      <CardBody>
        <Image src={img} />
        <Stack mt="6" spacing="3">
          <Heading size="md">3-tier red velvet cake</Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </Text>
        </Stack>
      </CardBody>
      <CardFooter>
        <Flex direction="row" gap="4rem">
          <Text color="blue.600" fontSize="2xl">
            $450
          </Text>
          <Button
            style={{ background: "rgba(151, 52, 153, 1)", color: "#fff" }}
          >
            Add to cart
          </Button>
        </Flex>
      </CardFooter>
    </Card>
  );
};

export default CardItem;
