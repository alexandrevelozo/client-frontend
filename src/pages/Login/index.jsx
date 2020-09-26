import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import iconRocket from '../../assets/icon-rocket.svg';

import { Container, Wrapper, Background } from './styles';

function Login() {
  return (
    <Container>
      <Wrapper>
        <img src={iconRocket} alt="icone login" />
        <form>
          <h1>Faça seu login</h1>
          <input placeholder="E-mail" />
          <input type="password" placeholder="Senha" />
          <button type="submit">Entrar</button>
          <a href="forgot">Esqueci minha senha</a>
        </form>

        <a href="create-account">
          <FiLogIn />
          Criar conta
        </a>
      </Wrapper>

      <Background>
        <h1>
          Let's go <br /> Dev
        </h1>
      </Background>
    </Container>
  );
}

export default Login;
