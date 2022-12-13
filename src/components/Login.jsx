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

            </div>
        </div>
    )
}