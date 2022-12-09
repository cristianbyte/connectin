import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        <Sidebar/>

      </main>
    </div>
  );
}

export default App;
