import React from 'react';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Feed from './Components/Feed';

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
