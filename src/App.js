import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        <Sidebar/>
        <Feed/>
      </main>
    </div>
  );
}

export default App;
