import styled from "styled-components";

export const SelectBtn = styled.button`
  width: 166px;
  height: 55px;
  flex-shrink: 0;
  background-color: #fff;
  border-radius: 15px;
  border: 1.5px solid #E7E7E7;

  color: ${(props) => (props.selected ? "#000" : "#7B7B7B")};
  font-family: "Pretendard Variable";
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%; /* 23.4px */

  cursor: pointer;

  &:hover {
    border-color: #000; /* Optional: Add hover effect for better UX */
  }
`;
