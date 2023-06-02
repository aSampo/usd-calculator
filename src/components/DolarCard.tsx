import { Card, CardBody, Flex, Text } from "@chakra-ui/react";
import useStore from "../store/store";

const DolarCard = () => {
  const { bluePrice } = useStore();

  return (
    <Card>
      <CardBody>
        <Flex direction="column" alignItems="center">
          <Text as="b" fontSize="md">
            Blue
          </Text>
          <Text fontSize="sm">{bluePrice}</Text>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default DolarCard;
