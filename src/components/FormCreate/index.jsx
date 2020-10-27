import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';

import { Container, Input } from './styles';

function FormCreate({ children }) {
  const history = useHistory();

  const [nome, setNome] = useState('');
  const [avatar, setAvatar] = useState('');
  const [dataNascimento, setData] = useState('');
  const [salario, setSalario] = useState(Number);
  const [ativo, setAtivo] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    api
      .post(`/usuarios/`, {
        avatar,
        nome,
        dataNascimento,
        salario,
        ativo,
      })
      .then(console.log)
      .then(() => {
        alert('Cadastro realizado com sucesso!');

        history.go();
      })
      .catch(() => {
        alert('Erro na cadastro!');
      });
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <div>
          <img src={avatar} alt="" />
          <Input
            type="text"
            placeholder="Avatar"
            value={avatar}
            onChange={(avatar) => setAvatar(avatar.target.value)}
          />
        </div>
        <div>
          <h1>Nome</h1>
          <Input
            type="text"
            placeholder="Nome"
            value={nome}
            onChange={(nome) => setNome(nome.target.value)}
          />
        </div>

        <div>
          <h1>Data</h1>
          <Input
            type="date"
            placeholder="Data/Nascimento"
            value={dataNascimento}
            onChange={(data) => setData(data.target.value)}
          />
        </div>

        <div>
          <h1>Salário</h1>
          <Input
            type="text"
            placeholder="Salário"
            value={salario}
            onChange={(sal) => setSalario(sal.target.value)}
          />
        </div>

        <div className="status">
          <h1>Status</h1>
          <Input
            type="checkbox"
            checked={true}
            placeholder="Status"
            onChange={(ativo) => setAtivo(ativo.target.value)}
          />
        </div>
        <div className="buttons">{children}</div>
      </form>
    </Container>
  );
}

export default FormCreate;
