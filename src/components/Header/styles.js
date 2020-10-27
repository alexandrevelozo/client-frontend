import styled, { css } from 'styled-components';
import { Sun, Moon } from 'styled-icons/feather';

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  height: 64px;
  background: ${(props) => props.theme.primary};
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
    color: ${(props) => props.theme.icons};
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
    border: 1px solid ${(props) => props.theme.icons};
  }
`;

const icon = css`
  color: ${(props) => props.theme.logo};
  cursor: pointer;
`;

export const StyledSun = styled(Sun)`
  ${icon}
`;

export const StyledMoon = styled(Moon)`
  ${icon}
`;
