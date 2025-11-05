import React, { useEffect, useState } from 'react';
import api from '../services/api';

function ItemList() {
  const [itens, setItens] = useState([]);

  useEffect(() => {
      carregarItens();
  }, []);

  const carregarItens = async () => {
      const response = await api.get('itens/');
      setItens(response.data);
  };

  const removerItem = async (id) => {
      await api.delete(`itens/${id}`);
      carregarItens();
  };

  return (
      <div>
          <h2>🛒 Lista de compras</h2>
          <ul>
              {itens.map(item => (
                  <li key={item.id}>
                      {item.nome} - {item.categoria}
                      <button onClick={() => removerItem(item.id)}>Remover</button>
                  </li>
              ))}
          </ul>
      </div>
  )
}

export default ItemList;
