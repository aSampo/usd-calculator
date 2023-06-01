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

const CurrencyInput = () => {
  const [formattedValue, setFormattedValue] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value;
    const formatted = formatValue(rawValue);
    setFormattedValue(formatted);
  };

  const formatValue = (value: string): string => {
    const numberParts = value.replace(/[^0-9]/g, "").split(".");
    const integerPart = numberParts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    const formatted = numberParts.length > 1 ? `${integerPart}.${numberParts[1]}` : integerPart;
    return formatted;
  };

  return (
    <Stack>
      <Select size="sm" variant="filled" width="45%">
        <option value="option1">USD 🇺🇸</option>
        <option value="option2">ARS 🇦🇷</option>
      </Select>
      <NumberInput min={0} value={formattedValue} >
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<FaDollarSign color="gray.300" />}
          />
          <NumberInputField
            onChange={handleChange}
            style={{ textAlign: "right" }}
          />
        </InputGroup>
      </NumberInput>
    </Stack>
  );
};

export default CurrencyInput;
