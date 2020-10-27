import React from 'react';

import styled from 'styled-components';

const ButtonStyle = styled.button`
  border-radius: 10px;
  border: 0;
  padding: 0 12px;
  color: ${(props) => props.theme.text};
  font-weight: 600;

  cursor: pointer;
  transition: 0.2s ease-in;

  &:hover {
    background: #21634e;
  }

  margin-left: 3px;
`;

const Button = ({ text, onClick, height, width, color, type }) => {
  return (
    <>
      <ButtonStyle
        style={{ height: height, width: width, backgroundColor: color }}
        onClick={onClick}
        type={type}
      >
        {text}
      </ButtonStyle>
    </>
  );
};

export default Button;
