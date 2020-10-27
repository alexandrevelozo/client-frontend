import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 256px auto;

  height: 100vh;
  background: ${(props) => props.theme.body};
`;
