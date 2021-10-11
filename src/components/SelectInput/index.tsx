import React from 'react';
import { Container, Label, Select } from './style';

interface Option {
  name: string;
  value: number;
}

interface Props {
  defaultValue?: number;
  label: string;
  options: Option[];
  onChange?: (value: number) => void;
}

const SelectInput: React.FC<Props> = ({
  defaultValue,
  label,
  options,
  onChange,
}) => (
  <Container>
    <Label>{label}</Label>
    <Select
      defaultValue={defaultValue}
      onChange={({ target }) => onChange && onChange(Number(target.value))}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </Select>
  </Container>
);

export default SelectInput;
