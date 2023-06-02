import { Card, CardBody, Flex, Text } from "@chakra-ui/react";

interface DolarCardProps {
  nombre: string;
  venta: string;
}

const DolarCard = ({ nombre, venta }: DolarCardProps) => {
  return (
    <Card>
      <CardBody>
        <Flex direction="column" alignItems="center">
          <Text as="b" fontSize="sm">
            {nombre}
          </Text>
          <Text fontSize="sm">$ {venta}</Text>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default DolarCard;
