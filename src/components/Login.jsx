import React from "react";
import logoIn from '../assets/logo-in.png'
import './login.css'

export default function Login(){
    return(
        <div className="login">
            <div className="login__left">
                <div className="login__blur">
                    <img src={logoIn} alt="" srcset="" />
                    <div className="login__slogan">
                        Maximiza tu potencial y amplía tu networking.
                    </div>
                </div>
            </div>
            <div className="login__rigth">
                <h2>Hey, Hello </h2>
                <form>
                    <input type="email" name="email" placeholder="Name" />
                    <input type="password" name="password" placeholder="Password" />
                    <button>Log In</button>
                </form>
            </div>
        </div>
    )
}