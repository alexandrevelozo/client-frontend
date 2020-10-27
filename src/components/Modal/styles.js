import styled from 'styled-components';

export const ModalContent = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  background: ${(props) => props.theme.modal};
  color: #000;
  width: 626px;
  height: 420px;
  border-radius: 20px;

  .buttons-delete {
    display: block;
    align-items: center;
    justify-content: center;
    margin: 0 auto;

    h1 {
      color: ${(props) => props.theme.text};
      font-size: 20px;
    }

    .buttons {
      margin-top: 45px;
    }
  }
`;
