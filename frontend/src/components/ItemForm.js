import React, { useState } from 'react';
import api from '../services/api';

function ItemForm({ onAdd }) {
    const [nome, setNome] = useState('');
    const [categoria, setCategoria] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.post('itens/', { nome, categoria, comprado: false});
            setNome('');
            setCategoria('');
            onAdd();
        } catch (error) {
            alert('Erro ao adicionar item. Tente novamente.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                placeholder="Nome do item"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
            />
            <input
                placeholder="Categoria"
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
            />
            <button type="submit">Adicionar</button>
        </form>
    );
}

export default ItemForm;
