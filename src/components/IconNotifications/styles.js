import styled from 'styled-components';

export const Container = styled.div`
  svg {
    path {
      fill: ${(props) => props.theme.icons};
    }
  }

  padding-top: 5px;
`;
