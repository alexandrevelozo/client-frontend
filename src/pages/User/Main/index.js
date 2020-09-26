import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../../services/api';

import Header from '../../../components/Header';

import './styles.css';

function Main() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    api.get('usuarios').then((response) => {
      setUsuarios(response.data);
    });
  }, [setUsuarios]);

  return (
    <>
      <Header />
      <div className="usuario-list">
        {usuarios.map((usuario) => (
          <div key={usuario.id} className="card mb-4">
            <h5 className="card-header">{usuario.nome}</h5>
            <article>
              <strong>{usuario.salario}</strong>
              <p>
                <Link to={`/usuarios/${usuario.id}`}>Acessar</Link>
              </p>
            </article>
          </div>
        ))}
      </div>
    </>
  );
}

export default Main;
