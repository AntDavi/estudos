import React from 'react';

class App extends React.Component {
  render() {
    return (
      <>
        <p>
          Olá Mundo
        </p>
        <p>
          Aqui é o Davi
        </p>
        <p>
          {new Date().toLocaleDateString('pt-BR')}
        </p>
      </>
    );
  }
}

export default App;
