import { Flex, Spacer, Text } from "@chakra-ui/react";
import useStore from "../store";

const CurrencyResult = ({ nombre, venta, input }: any) => {
  const { selectedCurrency } = useStore();
  const result = selectedCurrency === "usd" ? input * venta : input / venta;

  return (
    <Flex gap={2}>
      <Text fontSize="xl" as="b" color="secondary.200">
        {nombre}
      </Text>
      <Spacer />
      <Text fontSize="xl" color="secondary.200">
        ${" "}
        {result.toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </Text>
    </Flex>
  );
};

export default CurrencyResult;
