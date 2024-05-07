import {
  Card,
  CardBody,
  CardHeader,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

const Customer = ({ img, name, city, text }) => {
  return (
    <Card w="100%" boxShadow="0 0  15px #888" bg="#F3BDcf" color="#000">
      <CardHeader position="relative">
        <Image src={img} w="10%" />
        <Stack direction="column" position="absolute" top="1rem" left="6rem">
          <Text fontSize="1.4rem" fontWeight="600">
            {name}
          </Text>
          <Text fontSize="1rem">{city}</Text>
        </Stack>
      </CardHeader>
      <CardBody>
        <Text>{text}</Text>
      </CardBody>
    </Card>
  );
};

export default Customer;
