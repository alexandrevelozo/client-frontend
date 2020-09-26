import styled from 'styled-components';
import { BsFillBrightnessHighFill } from 'react-icons/bs';

export const Container = styled.div`
  position: absolute;
  align-self: flex-start;
  margin-top: 2vh;
  padding-left: 20px;
  flex-shrink: 0;
`;

export const IconSwitchTheme = styled(BsFillBrightnessHighFill)`
  width: 22px;
  height: 22px;
  flex-shrink: 0;
  cursor: pointer;
`;
