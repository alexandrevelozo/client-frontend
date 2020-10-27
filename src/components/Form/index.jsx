import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';

import { Container, Input } from './styles';

function Form({ children, data }) {
  const history = useHistory();

  const [id] = useState(data.id);
  const [nome, setNome] = useState(data.nome);
  const [avatar, setAvatar] = useState(data.avatar);
  const [dataNascimento, setData] = useState();
  const [salario, setSalario] = useState(data.salario);
  const [ativo, setAtivo] = useState(data.ativo);

  const handleSubmit = (e) => {
    e.preventDefault();

    api
      .put(`/usuarios/${id}`, {
        avatar,
        nome,
        dataNascimento,
        salario,
        ativo,
      })
      .then(console.log)
      .then(() => {
        alert('Alteração realizada com sucesso!');

        history.go();
      })
      .catch(() => {
        alert('Erro na alteração!');
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

        <div>
          <h1>Status</h1>
          <Input
            type="checkbox"
            checked={ativo}
            placeholder="Status"
            onChange={() => setAtivo(!ativo)}
          />
        </div>
        <div className="buttons">{children}</div>
      </form>
    </Container>
  );
}

export default Form;
