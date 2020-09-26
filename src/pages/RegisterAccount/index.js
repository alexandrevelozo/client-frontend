import React from 'react';

import IconContent from '../../assets/icon-content.svg';

import { Container, Wrapper, Background } from './styles';

function Login() {
  return (
    <Container>
      <Background>
        <img src={IconContent} alt="content" />
      </Background>
      <Wrapper>
        <form>
          <div className="items-text">
            <h1>Cadastro</h1>
            <span>Preencha os dados abaixo</span>
            <span>para começar</span>
          </div>
          <input placeholder="Nome" />
          <input placeholder="E-mail" />
          <input type="password" placeholder="Senha" />
          <button type="submit">Concluir Cadastro</button>
        </form>

        <span className="bottom-form">
          Let's go dev
          <span className="rocket" role="img" aria-label="rocket">
            🚀
          </span>
        </span>
      </Wrapper>
    </Container>
  );
}

export default Login;
