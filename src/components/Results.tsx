import { Card, CardBody } from "@chakra-ui/react";
import CurrencyResult from "./CurrencyResult";

const Results = () => {
  return (
    <Card>
      <CardBody
        display="flex"
        flexDirection="column"
        justifyContent="center"
        gap={3}
      >
        <CurrencyResult />
        <CurrencyResult />
        <CurrencyResult />
        <CurrencyResult />
        <CurrencyResult />
        <CurrencyResult />
      </CardBody>
    </Card>
  );
};

export default Results;
