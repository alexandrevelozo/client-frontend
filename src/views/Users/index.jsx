import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import * as moment from 'moment';
import { useModalContext } from '../../components/contexts/ModalContext';

import api from '../../services/api';

import Modal from '../../components/Modal';
import Form from '../../components/Form';
import FormCreate from '../../components/FormCreate';
import Button from '../../components/Button';

import {
  Container,
  AddUser,
  IconAddUser,
  Wrapper,
  WrapperUser,
  HeaderInfo,
  UsersData,
} from './styles';

function Users() {
  const { modalVisible, setModalVisible } = useModalContext();

  const [users, setUsers] = useState([]);
  const [userUpdate, setUserUpdate] = useState({});
  const [userDelete, setUserDelete] = useState(Number);
  const [buttonType, setButtonType] = useState('');

  const history = useHistory();

  useEffect(() => {
    api.get('usuarios').then((response) => {
      setUsers(response.data);
    });
  }, []);

  const handleUpdateUser = (data) => {
    const { id } = userUpdate;

    api.put(`/usuarios/${id}`, data);
  };

  const handleUserDelete = (id) => {
    api
      .delete(`/usuarios/${id}`)
      .then(() => {
        alert('Usuário excluido com sucesso');

        history.go();
      })
      .catch((err) => {
        alert(`Ops, aconteceu algum erro!: ${err}`);
      });
  };

  return (
    <Container>
      <Wrapper>
        <AddUser>
          <span>Usuários</span>
          <button
            onClick={() => {
              setModalVisible(true);
              setButtonType('createUser');
            }}
          >
            <IconAddUser />
          </button>
        </AddUser>

        <HeaderInfo>
          <h1 className="name">Nome</h1>
          <h1 className="data">Data/Nascimento</h1>
          <h1 className="sal">Salário</h1>
          <h1 className="status">Status</h1>
          <h1 className="status">Ação</h1>
        </HeaderInfo>

        <WrapperUser>
          {users.map((user) => (
            <UsersData key={user.id}>
              <div>
                <img src={user.avatar} alt="junior" />
                <h1>{user.nome}</h1>
              </div>
              <h1>{moment.utc(user.dataNascimento).format('DD/MM/YYYY')}</h1>
              <h1>
                {user.salario.toLocaleString('pt-br', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </h1>
              <h1>{user.ativo ? 'Ativo' : 'Inativo'}</h1>
              <div>
                <Button
                  onClick={() => {
                    setUserUpdate(user);
                    setModalVisible(true);
                    setButtonType('update');
                  }}
                  text="Editar"
                  width="65px"
                  height="30px"
                  color="#5dc399"
                />

                <Button
                  onClick={() => {
                    setUserDelete(user.id);
                    setModalVisible(true);
                    setButtonType('delete');
                  }}
                  text="Excluir"
                  width="65px"
                  height="30px"
                  color="#f65959"
                />
              </div>
              {modalVisible && buttonType === 'update' ? (
                <Modal>
                  <Form data={userUpdate} onSubmit={handleUpdateUser}>
                    <div>
                      <Button
                        type="submit"
                        text="Salvar"
                        width="127px"
                        height="40px"
                        color="#5dc399"
                      />
                      <Button
                        onClick={() => setModalVisible(false)}
                        type="button"
                        text="Cancelar"
                        width="126px"
                        height="40px"
                        color="#f65959"
                      />
                    </div>
                  </Form>
                </Modal>
              ) : null}
              {modalVisible && buttonType === 'delete' ? (
                <Modal>
                  <div className="buttons-delete">
                    <h1>Deseja realmente exluir?</h1>
                    <div className="buttons">
                      <Button
                        onClick={() => {
                          handleUserDelete(userDelete);
                        }}
                        type="submit"
                        text="Excluir"
                        width="127px"
                        height="40px"
                        color="#5dc399"
                      />
                      <Button
                        onClick={() => setModalVisible(false)}
                        type="button"
                        text="Cancelar"
                        width="126px"
                        height="40px"
                        color="#f65959"
                      />
                    </div>
                  </div>
                </Modal>
              ) : null}
              {modalVisible && buttonType === 'createUser' ? (
                <Modal>
                  <FormCreate>
                    <div>
                      <Button
                        type="submit"
                        text="Criar"
                        width="127px"
                        height="40px"
                        color="#5dc399"
                      />
                      <Button
                        onClick={() => setModalVisible(false)}
                        type="button"
                        text="Cancelar"
                        width="126px"
                        height="40px"
                        color="#f65959"
                      />
                    </div>
                  </FormCreate>
                </Modal>
              ) : null}
            </UsersData>
          ))}
        </WrapperUser>
      </Wrapper>
    </Container>
  );
}

export default Users;
