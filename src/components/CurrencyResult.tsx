import { Flex, Spacer, Text } from "@chakra-ui/react";
import { useEffect } from "react";

const CurrencyResult = ({ nombre, venta, input }: any) => {
  useEffect(() => {
    console.log("input :>> ", input);
  }, [input]);

  return (
    <Flex>
      <Text fontSize="xl" color="secondary.200">
        {nombre}
      </Text>
      <Spacer />
      <Text fontSize="xl" color="secondary.200">
        $ {input * venta}
      </Text>
    </Flex>
  );
};

export default CurrencyResult;
