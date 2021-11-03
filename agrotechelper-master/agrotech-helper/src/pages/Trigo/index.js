import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from "../../assets/logo.svg";

import "./styles.css";
import trigoimg from "../../assets/trigo.png";


export default function Trigo (){
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
                    <strong>Trigo Atacado - Média PR</strong>

                    <Link button type="button" to="/trigocepea">
                    <button>
                    Acessar cotações
                    </button>
                    </Link>
                    <img src={trigoimg} alt="trigo"/>

                </li>

                <li>
                    <strong>Trigo - Bolsa de Chicago</strong>



                    <Link button type="button" to="/trigochicago">
                    <button>
                    Acessar cotações
                    </button>
                    </Link>
                    <img src={trigoimg} alt="trigo"/>

                </li>

                <li>
                    <strong>Trigo - Mercado Físico - MS</strong>
                    <Link button type="button" to="/trigoiea">
                    <button>
                    Acessar cotações
                    </button>
                    </Link>
                    <img src={trigoimg} alt="trigo"/>

                </li>
          

            </ul>
    
        </div>
    );
}
