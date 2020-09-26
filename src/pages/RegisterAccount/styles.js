import styled from 'styled-components';

import backImage from '../../assets/background.jpg';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 1px solid #bb86fc;

  place-content: center;

  width: 100%;
  max-width: 700px;

  @media (min-width: 1800px) {
    max-width: 1200px;
  }

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    .items-text {
      display: flex;
      flex-direction: column;
      width: 100%;
      align-items: flex-start;
      padding-bottom: 20px;
    }

    h1 {
      color: ${({ theme }) => theme.text};
      margin-top: -40px;
      padding-bottom: 6px;
    }

    input {
      background: #f4f4f4;
      border-radius: 10px;
      border: 2px solid #bb86fc;
      padding: 16px;
      width: 100%;
      color: #2f2e41;
    }

    input::placeholder {
      color: #232129;
    }

    input + input {
      margin-top: 8px;
    }

    button {
      background: #bb86fc;
      height: 56px;
      border-radius: 10px;
      border: 0;
      padding: 0 16px;
      color: #312e38;
      width: 100%;
      font-weight: 600;
      margin-top: 16px;
      cursor: pointer;
    }

    button:hover {
      background: #654a85;
    }

    a {
      color: #bb86fc;
      display: block;
      margin-top: 24px;
      text-decoration: none;
    }

    a:hover {
      color: #654a85;
    }
  }

  a {
    color: #bb86fc;
    display: block;
    margin-top: 24px;
    text-decoration: none;

    display: flex;
    align-items: center;
  }

  a:hover {
    color: #654a85;
  }

  a > svg {
    margin-right: 16px;
  }
  .bottom-form {
    color: #bb86fc;

    .rocket {
      padding-left: 4px;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  /* background: url(${backImage}) no-repeat center; */
  background: ${({ theme }) => theme.background};
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    color: #bb86fc;
    font-size: 44px;

    @media (max-width: 1022px) {
      display: none;
    }
  }
`;
