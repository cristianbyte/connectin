import React from 'react';
import Login from './Components/Login';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Feed from './Components/Feed';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

function App() {
  const user = useSelector(selectUser)

  return (
    <div className="App">
      <Header/>

      {!user ? <Login/> : (
        <main>
          <Sidebar/>
          <Feed/>
        </main>
      )}
    </div>
  );
}

export default App;
