import { SimpleGrid } from "@chakra-ui/react";
import DolarCard from "./DolarCard";
import useStore from "../store";

const DolarOptions = () => {
  const { dollarPrices } = useStore();

  return (
    <SimpleGrid columns={3} spacing={3}>
      {dollarPrices.map((dollarPrice: any) => (
        <DolarCard key={dollarPrice.nombre} nombre={dollarPrice.nombre} venta={dollarPrice.venta} />
      ))}
    </SimpleGrid>
  );
};

export default DolarOptions;
