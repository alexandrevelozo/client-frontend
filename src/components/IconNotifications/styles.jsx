import styled from 'styled-components';

export const Container = styled.div`
  svg {
    path {
      fill: ${({ theme }) => theme.icons};
    }
  }

  padding-top: 5px;
`;
