import React from 'react';
import styled from 'styled-components';

const ProgressBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
`;

const Bar = styled.div`
  width: 7%;
  height: 4px;
  margin-top: 54px;
  border-radius: 100px;
  background-color: ${(props) => (props.active ? '#FFC0C0' : '#EFEFEF')};
`;

const ProgressBar = ({ currentPage, totalBars = 12 }) => {
  return (
    <ProgressBarContainer>
      {Array.from({ length: totalBars }).map((_, index) => (
        <Bar key={index} active={index <= currentPage} />
      ))}
    </ProgressBarContainer>
  );
};

export default ProgressBar;