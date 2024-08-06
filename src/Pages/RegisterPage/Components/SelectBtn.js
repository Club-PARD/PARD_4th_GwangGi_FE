import styled from "styled-components";

export const SelectBtn = styled.button`
  width: 166px;
  height: 55px;
  flex-shrink: 0;
  background-color: ${(props) => (props.selected ? "#bbb" : "#fff")};
  border-radius: 15px;
  border: 1.5px solid #E7E7E7;

  color: #7B7B7B;
  font-family: "Pretendard Variable";
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%; /* 23.4px */

  cursor: pointer;
`;
