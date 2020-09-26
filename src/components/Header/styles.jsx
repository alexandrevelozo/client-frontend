import styled from 'styled-components';
import { BsFillBrightnessHighFill } from 'react-icons/bs';

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  height: 64px;
  background: ${({ theme }) => theme.primary};
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
`;

export const SessionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  > h1 {
    color: ${({ theme }) => theme.icons};
    font: 600 22px Arial;
    padding-left: 12px;
  }
`;

export const HeaderItems = styled.div`
  display: flex;
  align-items: center;
  width: 180px;
  justify-content: space-between;

  .profile-header {
    width: 22px;
    height: 22px;
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.icons};
  }
`;

export const IconSwitchTheme = styled(BsFillBrightnessHighFill)`
  width: 22px;
  height: 22px;
  flex-shrink: 0;
  cursor: pointer;
`;
