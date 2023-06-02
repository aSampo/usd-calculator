import { SimpleGrid } from "@chakra-ui/react";
import DolarCard from "./DolarCard";

const DolarOptions = () => {
  return (
    <SimpleGrid columns={3} spacing={5}>
      <DolarCard />
      <DolarCard />
      <DolarCard />
      <DolarCard />
      <DolarCard />
      <DolarCard />
    </SimpleGrid>
  );
};

export default DolarOptions;
