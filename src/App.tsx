import { Card, CardBody, Flex, Stack } from "@chakra-ui/react";
import CurrencyInput from "./components/CurrencyInput";
import "./App.css";
import DolarOptions from "./components/DolarOptions";
import Results from "./components/Results";

function App() {
  return (
    <div className="layout">
      <Card w="600px" h="400px">
        <CardBody>
          <Flex gap={5}>
            <Stack>
              <CurrencyInput />
              <DolarOptions />
            </Stack>
            <Results />
          </Flex>
        </CardBody>
      </Card>
    </div>
  );
}

export default App;
