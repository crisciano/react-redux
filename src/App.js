import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [ name, setName ] = useState('');
  const [ items, setItems ] = useState([])
  const [ title ] = useState('React redux')

  useEffect( () => {
    document.title = title
  })

  function handleChangeName(e){
    setName(e.target.value)
  }

  function addItem(item){
    setItems([ ...items, { id: items.length + 1, name: item }])
    setName('')
  }
  function removeItem(id){
    console.log(id);
    setItems(items.filter( item => item.id !== id ))
  }

  return (
    <div className="App">
      <header className="App-header">
        <label>Name</label>
        <input 
          value={name}  
          onChange={handleChangeName} 
        /> 
        {/* <p> {name} </p> */}
        <button onClick={() => addItem(name)} > Salve </button>
        <ul>
          {
            items.map( item => (
              <li key={item.id} >{item.name} <button onClick={() => removeItem(item.id) } > remove </button> </li>
            ))
          }

        </ul>
      </header>
    </div>
  );
}

export default App;
