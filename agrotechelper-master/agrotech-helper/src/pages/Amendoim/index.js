import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from "../../assets/logo.svg";
import "./styles.css";
import amendoimimg from "../../assets/amendoim.png";

export default function Amendoim (){
    return (
        <div className="menu-container">
            <header>
                <img src={logoImg} alt="Logo"/>
                <Link button type="button" to="/menu">
                    <button>Voltar</button>
                </Link>
            </header>  
            <h1>Cotações</h1>
            <ul>
                <li>
                    <strong>Amendoim - Ceasas</strong>

                    <Link button type="button" to="/amendoimceasas">
                    <button>
                    Acessar cotações
                    </button>
                    </Link>
                    <img src={amendoimimg} alt="amendoim"/>

                </li>
          

            </ul>
    
        </div>
    );
}
