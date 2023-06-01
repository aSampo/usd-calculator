import { Card, CardBody, Flex, Text } from "@chakra-ui/react";

const DolarCard = () => {
  return (
    <Card>
      <CardBody>
        <Flex direction="column" alignItems='center'>
          <Text>Blue</Text>
          <Text>$500</Text>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default DolarCard;
