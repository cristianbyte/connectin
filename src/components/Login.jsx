import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { auth } from '../firebase'
import { login } from '../features/userSlice'
import './login.css'

export default function Login(){
    const [fill, setFill] = useState('login')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const dispatch = useDispatch();

    const loginApp = (e)=>{
        fill === 'login' ? e.preventDefault():
            e.preventDefault()
            console.log('who')
            auth.createUserWithEmailAndPassword(email,password)
            .then((userAuth)=>{
                userAuth.user.updateProfile({
                    displayName:name,
                }).then(()=>{
                    dispatch(login({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName: name,
                    }))
                })
            }).catch((error) =>{
                alert(error)
            })
        
    }

    return(
        <div className="login">
            <div className="login__left">
                <div className="login__slogan">
                    Maximiza tu potencial y amplía tu networking.
                </div>
            </div>
            <div className="login__rigth">
                <h2>Hey, Hello </h2>
                <form>
                    {
                        fill === 'register'?
                            <input value={name} onChange={(e)=>setName(e.target.value)} type="text" required placeholder="Full name (required if registering)" />:
                            console.log('Login')
                    }
                    <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" required placeholder="Email" />
                    <input value={password} onChange={(e) =>setPassword(e.target.value)} type="password" required placeholder="Password" />
                    <button type="submit" onClick={loginApp}>{
                        fill === 'login'?'Log In':'Register'
                    }</button>
                    <p>{fill==='login'?'Not a member? ':'Already have an account? '}
                        <span onClick={(e)=> setFill(fill==='login'?'register':'login')} >
                            {fill==='login'?'Register Now':'Login Now'}
                        </span> 
                    </p>
                </form>
            </div>
        </div>
    )
}