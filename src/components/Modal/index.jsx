import React from 'react';

import { ModalContent, Container } from './styles';

const Modal = ({ children }) => {
  return (
    <ModalContent>
      <Container>{children}</Container>
    </ModalContent>
  );
};

export default Modal;
