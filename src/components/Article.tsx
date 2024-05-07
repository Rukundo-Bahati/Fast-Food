import { Card, CardBody, Text } from "@chakra-ui/react";

const Article = ({ img, text }) => {
  return (
    <Card
      w={{ base: "100%", md: "100%" }}
      h="400px" 
      boxShadow="0 0 15px #888"
      bg={`url(${img})`}
      bgSize="cover"
      opacity="0.8"
    >
      <CardBody>
        <Text color="#fff">{text}</Text>
      </CardBody>
    </Card>
  );
};

export default Article;
