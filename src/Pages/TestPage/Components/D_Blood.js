
import styled from "styled-components";

export const D_Blood = styled.button`
  width: 345px;
  height: 71px;
  flex-shrink: 0;
  border-radius: 15px;
  border: 1.5px solid ${props => props.isSelected ? '#FF7575' : '#E7E7E7'};
  background: ${props => props.isSelected ? '#FFE4E4' : '#FFF'};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 16px;
  position: relative; /* Added to position info icon */

  p {
    color: #000;
    font-family: "Pretendard Variable";
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%; /* 23.4px */
    margin-left: 16px;
  }

  img {
    width: 19px;
    height: 19px;
    position: absolute;
    right: 16px; /* Adjust this value to position the icon correctly */
    cursor: pointer;
  }
`;