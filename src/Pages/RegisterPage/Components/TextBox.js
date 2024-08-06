import React from "react";
import styled from "styled-components";

const TextBoxWrapper = styled.div`
  position: relative;
  width: 326.7px;
  margin-bottom: 38.72px;
`;

const StyledTextBox = styled.input`
  width: 284px;
  height: 71px;
  //padding-top: 24px;
  padding-left: 18.3px;
  padding-right: 40px; /* Add padding to make space for the delete button */
  flex-shrink: 0;
  border-radius: 15px;
  border: 1.5px solid #E7E7E7;
  background: #FFF;
  resize: none;

  color: #000;
  font-family: "Pretendard Variable";
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%; /* 23.4px */

  &::placeholder {
    color: #BCBCBC;
    font-family: "Pretendard Variable";
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%; /* 23.4px */
  }
`;

const DeleteButton = styled.button`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  margin: 0;
  width: 16px;
  height: 16px;
  background-image: url('/Img/RegisterPage/GrayDeleteBtn.png'); /* Add your image path here */
  background-size: cover;
  background-repeat: no-repeat;
`;

function TextBox({ placeholder, value, onChange, onDelete }) {
  return (
    <TextBoxWrapper>
      <StyledTextBox
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <DeleteButton onClick={onDelete} />
    </TextBoxWrapper>
  );
}

export default TextBox;