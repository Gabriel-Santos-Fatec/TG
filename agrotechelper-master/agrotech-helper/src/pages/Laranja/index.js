import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from "../../assets/logo.svg";
import "./styles.css";

import laranjaimg from "../../assets/laranja.png";

export default function Laranja (){
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
                    <strong>Laranja Pera In Natura</strong>

                    <Link button type="button" to="/laranjaceasas">
                    <button>
                    Acessar cotações
                    </button>
                    </Link>
                    <img src={laranjaimg} alt="laranja"/>

                </li>

                <li>
                    <strong>Suco de Laranja - Bolsa de Nova Iorque (NYBOT)</strong>



                    <Link button type="button" to="/laranjany">
                    <button>
                    Acessar cotações
                    </button>
                    </Link>
                    <img src={laranjaimg} alt="laranja"/>

                </li>

                <li>
                    <strong>Laranja Indústria</strong>
                    <Link button type="button" to="/laranjaind">
                    <button>
                    Acessar cotações
                    </button>
                    </Link>
                    <img src={laranjaimg} alt="laranja"/>

                </li>
          

            </ul>
    
        </div>
    );
}
