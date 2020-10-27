import styled from 'styled-components';

export const Container = styled.div`
  display: block;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 90%;
  height: 90%;

  form {
    width: 55%;
    margin-right: 35px;

    .status {
      display: none;
    }

    div {
      display: flex;
      justify-content: space-between;

      img {
        width: 30px;
        height: 30px;
        flex-shrink: 0;
        margin-left: 7px;
        margin-bottom: 3px;
      }

      h1 {
        padding-right: 5px;
        padding-bottom: 7px;
        font-family: 'Roboto', sans-serif;
        color: #a4a4a4;
      }
    }
    .buttons {
      align-items: center;
      justify-content: center;
      margin-top: 18px;
      margin-left: 50px;
    }
  }
`;

export const Input = styled.input`
  width: 253px;
  background: #fafafa;
  border-radius: 10px;
  border: 2px solid #a4a4a4;
  padding: 12px;
  color: #2f2e41;

  &:nth-child(n) {
    margin-bottom: 7px;
  }
  &:nth-child(5) {
    margin-bottom: 20px;
  }
`;
