import React from 'react';
import ColorsContainer from './containers/ColorsContainer';
import Nav from './components/nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <main>
        <ColorsContainer />
      </main>
    </div>
  );
}

export default App;
