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
        gap={5}
      >
        {dollarPrices.map((dollarPrice: any) => (
          <CurrencyResult
            key={dollarPrice.nombre}
            nombre={dollarPrice.nombre}
            venta={dollarPrice.venta}
            input={input}
          />
        ))}
      </CardBody>
    </Card>
  );
};

export default Results;
