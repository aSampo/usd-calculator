import { Card, CardBody, Grid, Stack } from "@chakra-ui/react";
import CurrencyInput from "./components/CurrencyInput";
import "./App.css";
import DolarOptions from "./components/DolarOptions";
import Results from "./components/Results";

function App() {
  return (
    <div className="layout">
      <Card>
        <CardBody p="1rem">
          <Grid templateColumns="1fr 1fr" gap="1rem">
            <Stack>
              <CurrencyInput />
              <DolarOptions />
            </Stack>
            <Results />
          </Grid>
        </CardBody>
      </Card>
    </div>
  );
}

export default App;
