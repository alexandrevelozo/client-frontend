import React, { useState, useContext, createContext } from 'react';
// Preciso criar um context, provider e o hook

const ModalContext = createContext({});

const ModalProvider = ({ children }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ModalContext.Provider value={{ modalVisible, setModalVisible }}>
      {children}
    </ModalContext.Provider>
  );
};

const useModalContext = () => {
  const context = useContext(ModalContext);
  return context;
};

export { ModalProvider, useModalContext };
