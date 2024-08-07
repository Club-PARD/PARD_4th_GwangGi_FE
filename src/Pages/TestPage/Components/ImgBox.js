import React from 'react';
import styled from 'styled-components';

const ImgBoxContainer = styled.div`
  width: 347px;
  height: 318.76px;
  margin-top: 27px;
  margin-bottom: 14.24px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const ImgBox = ({ images }) => {
  return (
    <ImgBoxContainer>
      {images.map((image, index) => (
        <Image key={index} src={image} alt={`image-${index}`} />
      ))}
    </ImgBoxContainer>
  );
};

export default ImgBox;
