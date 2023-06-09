import { Flex, Spacer, Text } from "@chakra-ui/react";

const CurrencyResult = ({ nombre, venta, input }: any) => {
  return (
    <Flex>
      <Text fontSize="xl" as="b" color="secondary.200">
        {nombre}
      </Text>
      <Spacer />
      <Text fontSize="xl" color="secondary.200">
        $ {input ? input * venta : 0}
      </Text>
    </Flex>
  );
};

export default CurrencyResult;
