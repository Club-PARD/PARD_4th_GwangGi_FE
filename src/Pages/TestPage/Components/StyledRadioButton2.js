import React from 'react';
import styled from 'styled-components';

const RadioButton = styled.input.attrs({ type: 'checkbox' })`
  appearance: none;
  width: 20px;
  height: 20px;
  border: 1.5px solid #E7E7E7;
  border-radius: 50%;
  outline: none;
  cursor: pointer;
  position: relative;

  &:checked {
    border-color: #fff;
  }

  &:checked::before {
    content: '';
    display: block;
    width: 12px;
    height: 12px;
    background: #fff;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const Label = styled.label`
  margin-top: 25px;
  margin-left: 18px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Text = styled.span`
  margin-left: 17px;
`;

const StyledRadioButton2 = ({ label, checked, onChange, value }) => (
  <Label>
    <RadioButton checked={checked} onChange={() => onChange(value)} />
    <Text>{label}</Text>
  </Label>
);

export default StyledRadioButton2;