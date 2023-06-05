import {
  Select,
  NumberInput,
  NumberInputField,
  Stack,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { ChangeEvent } from "react";
import { FaDollarSign } from "react-icons/fa";
import useStore from "../store";

const CurrencyInput = () => {
  const { setInput, input } = useStore();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <Stack>
      <Select
        size="sm"
        variant="filled"
        minWidth="100px"
        width="30%"
        bg="secondary.200"
        focusBorderColor="primary.500"
      >
        <option value="option1">USD 🇺🇸</option>
        <option value="option2">ARS 🇦🇷</option>
      </Select>
      <NumberInput min={0} value={input} focusBorderColor="primary.500">
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<FaDollarSign color="gray.300" />}
          />
          <NumberInputField
            bg="secondary.200"
            onChange={handleChange}
            color="primary.500"
            style={{ textAlign: "right" }}
          />
        </InputGroup>
      </NumberInput>
    </Stack>
  );
};

export default CurrencyInput;
