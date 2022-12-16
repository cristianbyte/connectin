import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Login from './Components/Login';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Feed from './Components/Feed';
import { auth } from './firebase'
import { login, logout, selectUser } from './features/userSlice';
import './App.css'

function App() {
  const dispatch = useDispatch()
  const user = useSelector(selectUser)

  useEffect(()=>{
    auth.onAuthStateChanged(userAuth =>{
      if(userAuth){
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName
        }))


      }else{
        dispatch(logout())
      }
    },[])
  })
  // const 

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
