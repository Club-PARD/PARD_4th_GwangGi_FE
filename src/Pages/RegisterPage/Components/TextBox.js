import styled from "styled-components";

export const TextBox = styled.textarea`
  width: 326.7px;
  height: 47px;
  padding-top: 24px;
  padding-left: 18.3px;
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

  margin-bottom: 38.72px;

  &::placeholder{
    color: #BCBCBC;
    font-family: "Pretendard Variable";
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%; /* 23.4px */
  }
`;