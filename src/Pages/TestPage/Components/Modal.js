import React from 'react';
import styled from 'styled-components';

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  width: 341px;
  height: 527px;
  flex-shrink: 0;
  background: #fff;
  border-radius: 15px;
  padding: 20px;
  position: relative;
`;

const ScrollContainer = styled.div`
  width: 310px;
  height: 438.351px;
  flex-shrink: 0;
  overflow-y: auto;
  margin-top: 42px;
  margin-left: 17px;
  border-radius: 10px;
  background: #f9f9f9;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 10px;
  object-fit: contain;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 19px;
  right: 21px;
  background: none;
  border: none;
  cursor: pointer;

  img {
    width: 14.681px;
    height: 16px;
    flex-shrink: 0;
  }
`;

const Modal = ({ onClose }) => {
  return (
    <ModalBackdrop onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}><img src="/Img/TestPage/DeleteBtn.png" alt="삭제 버튼" /></CloseButton>
        <ScrollContainer>
          <Image src="/Img/TestPage/8-1.png" alt="헌혈 안내문1" />
          <Image src="/Img/TestPage/8-2.png" alt="헌혈 안내문2" />
        </ScrollContainer>
      </ModalContent>
    </ModalBackdrop>
  );
};

export default Modal;
