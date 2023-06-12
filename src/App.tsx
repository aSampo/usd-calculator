import { Box, Card, CardBody, Center, Grid, Stack } from "@chakra-ui/react";
import CurrencyInput from "./components/CurrencyInput";
import DolarOptions from "./components/DolarOptions";
import Results from "./components/Results";
import useStore from "./store";
import { useEffect } from "react";

function App() {
  const { fetchDollarPrices, isApiLoading } = useStore();

  useEffect(() => {
    fetchDollarPrices();
  }, []);

  return (
    <Box bg="primary.100" height="100vh">
      <Center
        height={{ base: "auto", md: "100vh" }}
        padding="1rem"
        style={{
          opacity: isApiLoading ? 0 : 1,
          transition: "opacity 0.5s ease-in-out",
        }}
      >
        {!isApiLoading ? (
          <Card bg="primary.50" shadow="xl">
            <CardBody p="1rem">
              <Grid
                templateColumns={{
                  base: "1fr",
                  md: "1fr 1.2fr",
                }}
                gap="1rem"
              >
                <Stack>
                  <CurrencyInput />
                  <DolarOptions />
                </Stack>
                <Results />
              </Grid>
            </CardBody>
          </Card>
        ) : null}
      </Center>
    </Box>
  );
}

export default App;
