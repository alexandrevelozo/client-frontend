import styled from 'styled-components';

export const Container = styled.div`
  svg {
    fill: ${(props) => props.theme.icons};
  }

  padding-top: 4px;
`;
