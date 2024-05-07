import { Card } from "@chakra-ui/react";

const Circle = ({ children }) => {
  return (
    <Card width="20%" height="20%" borderRadius="50%" bg="#fff">
      {children}
    </Card>
  );
};

export default Circle;
