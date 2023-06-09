import {
  Select,
  NumberInput,
  NumberInputField,
  Stack,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { ChangeEvent, useState } from "react";
import { FaDollarSign } from "react-icons/fa";
import useStore from "../store";

const CurrencyInput = () => {
  const { setInput } = useStore();
  const [stringInput, setStringInput] = useState("0");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStringInput(e.target.value.replace(/[^0-9]/g, ""));

    const number = parseFloat(e.target.value);
    setInput(number ? number : 0);
  };

  const handleFocus = () => {
    if (stringInput === "0") {
      setStringInput("");
    }
  };

  const handleBlur = () => {
    if (stringInput === "") {
      setStringInput("0");
    }
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
      <NumberInput
        min={0}
        max={100000000}
        value={stringInput}
        focusBorderColor="primary.500"
        onFocus={handleFocus}
        onBlur={handleBlur}
      >
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
