import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TabContent = styled.div`
  padding-left: 40px;
  &:nth-child(1) {
    padding-top: 35px;
  }
`;

export const LinkTab = styled(Link)`
  padding-left: 12px;
  font-size: 14px;
  text-decoration: none;
  color: ${(props) => props.theme.text};
  cursor: pointer;
`;
