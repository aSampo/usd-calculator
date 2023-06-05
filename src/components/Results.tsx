import { Card, CardBody } from "@chakra-ui/react";
import CurrencyResult from "./CurrencyResult";
import useStore from "../store";

const Results = () => {
  const { dollarPrices, input } = useStore();

  return (
    <Card bg="primary.500">
      <CardBody
        display="flex"
        flexDirection="column"
        justifyContent="center"
        gap={3}
      >
        {dollarPrices.map((dollarPrice: any) => (
          <CurrencyResult
            nombre={dollarPrice.nombre}
            venta={parseFloat(dollarPrice.venta)}
            input={parseFloat(input)}
          />
        ))}
      </CardBody>
    </Card>
  );
};

export default Results;
