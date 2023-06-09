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
    setStringInput(e.target.value);

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

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const key = event.key;
    const isNumericKey = key >= "0" && key <= "9";
    const isAllowedAction =
      isNumericKey ||
      key === "Backspace" ||
      key === "Delete" ||
      key === "ArrowLeft" ||
      key === "ArrowRight"; // Permite Ctrl+A para seleccionar todo el texto

    if (!isAllowedAction) {
      event.preventDefault();
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
        onKeyDown={handleKeyDown}
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
