// ModalBubble.js
import React from 'react';
import styled from 'styled-components';

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  position: relative;
  width: 260px;
  height: 80px;
  top: 36px;
  left: 38px;
  border-radius: 15px;
  background: #FFE4E4;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 15px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;

const ModalText = styled.div`
  z-index: 2;
  color: #FFF;
  font-family: "Pretendard Variable";
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  text-align: center;
  position: absolute;
  margin-top: 12px;

  p {
    color: #FFD7D7;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 120%;
    margin-top: 4px;
  }
`;

const ModalBubble = ({ onClose }) => {
  return (
    <ModalBackdrop onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <ModalImage src="/Img/TestPage/말풍선.png" alt="Modal Content" />
        <ModalText>
          혈액의 모든 성분(적혈구, 백혈구, 혈장, 혈소판)을<br />한번에 채혈하는 헌혈을 말해요!
          <p>(320ml, 400ml 체혈, 2개월 주기 연 5회 가능)</p>
        </ModalText>
      </ModalContainer>
    </ModalBackdrop>
  );
};

export default ModalBubble;