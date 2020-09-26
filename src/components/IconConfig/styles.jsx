import styled from 'styled-components';

export const Container = styled.div`
  svg {
    fill: ${({ theme }) => theme.icons};
  }

  padding-top: 4px;
`;
