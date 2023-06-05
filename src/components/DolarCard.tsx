import { Card, CardBody, Flex, Text } from "@chakra-ui/react";

interface DolarCardProps {
  nombre: string;
  venta: string;
}

const DolarCard = ({ nombre, venta }: DolarCardProps) => {
  return (
    <Card bg="primary.500">
      <CardBody>
        <Flex direction="column" alignItems="center">
          <Text as="b" fontSize="sm" color="secondary.200">
            {nombre}
          </Text>
          <Text fontSize="sm" color="secondary.200">
            $ {venta}
          </Text>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default DolarCard;
