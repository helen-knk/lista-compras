import React from 'react';
import ItemList from './components/ItemList';
import ItemForm from './components/ItemForm';

function App() {
    return (
        <div style={{ padding: '20px', fontFamily: 'sans-serif'}}>
            <h1>🛍️ Lista de Compras</h1>
            <ItemForm onAdd={() => window.location.reload()} />
            <ItemList />
        </div>
    )
}

export default App;