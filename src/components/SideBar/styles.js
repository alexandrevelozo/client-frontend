import styled, { css } from 'styled-components';
import { AiOutlineHome } from 'react-icons/ai';
import { FiUsers, FiLogOut } from 'react-icons/fi';
import { BsGear, BsInfoCircle } from 'react-icons/bs';
import { BiCart } from 'react-icons/bi';
import { Sun, Moon } from 'styled-icons/feather';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.primary};
  height: 100%;
  padding-top: 75px;
  color: ${(props) => props.theme.text};
  transition: 0.5s ease;

  .tab-last {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: flex-end;
    padding-bottom: 25px;
  }
`;

export const ImageProfile = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;

export const Profile = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  width: 200px;
  flex-wrap: wrap;
  padding-bottom: 24px;

  div {
    padding-top: 10px;
    span {
      font-family: Roboto;
    }
  }
`;

const iconCSS = css`
  width: 12px;
  height: 12px;
`;

export const IconHome = styled(AiOutlineHome)`
  ${iconCSS}
`;

export const IconUser = styled(FiUsers)`
  ${iconCSS}
`;

export const IconSystem = styled(BsGear)`
  ${iconCSS}
`;

export const IconInfo = styled(BsInfoCircle)`
  ${iconCSS}
`;

export const IconLogout = styled(FiLogOut)`
  ${iconCSS}
`;

export const IconProducts = styled(BiCart)`
  ${iconCSS}
`;

export const StyledSun = styled(Sun)`
  ${iconCSS}
  cursor: pointer;
`;

export const StyledMoon = styled(Moon)`
  ${iconCSS}
  cursor: pointer;
`;

export const TabContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
