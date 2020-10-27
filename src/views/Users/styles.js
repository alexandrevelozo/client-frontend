import styled from 'styled-components';
import { RiAddCircleFill } from 'react-icons/ri';

export const Container = styled.div`
  color: ${(props) => props.theme.text};
`;

export const Wrapper = styled.div`
  display: block;
  flex-direction: row;
  justify-content: center;

  margin: 0 auto;
  padding: 85px 80px 0;
  width: 100%;
  max-width: 1800px;

  font-family: Poppins;
`;

export const AddUser = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  height: 28px;

  margin-bottom: 32px;

  span {
    color: ${(props) => props.theme.text};
    font-size: 20px;
  }

  button {
    text-decoration: none;
    border: 0;
    background: none;
  }
`;
export const IconAddUser = styled(RiAddCircleFill)`
  width: 50px;
  height: 50px;
  flex-shrink: 0;
  fill: #5dc399;
  cursor: pointer;
  transition: 0.2s ease-in;

  &:hover {
    fill: #21634e;
  }
`;

export const HeaderInfo = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1fr 0.5fr;
  grid-template-rows: 1fr;

  margin-bottom: 32px;
  padding: 0.4rem 1rem;
  background: ${(props) => props.theme.primary};
  border-radius: 5px;

  h1 {
    font-size: 13px;
  }
`;

export const UsersData = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1fr 0.5fr;
  grid-template-rows: 1fr;

  align-items: center;

  /* margin-top: 32px; */
  padding: 1rem 1rem;
  /* background: #fafafa;
  border-radius: 5px;  */
  border-bottom: 1px solid ${(props) => props.theme.borderCardUser};

  div {
    display: flex;
    align-items: center;

    h1 {
      padding-left: 8px;
    }
  }

  h1 {
    font-size: 13px;
  }

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    flex-shrink: 0;
  }
`;

export const WrapperUser = styled.div`
  background: ${(props) => props.theme.primary};
  border-radius: 5px;
`;
