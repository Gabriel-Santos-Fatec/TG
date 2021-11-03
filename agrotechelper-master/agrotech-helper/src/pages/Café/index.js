import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from "../../assets/logo.svg";

import "./styles.css";
import coffeimg from "../../assets/cafe.png";


export default function Cafe (){
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
                    <strong>Indicador Café Arábica - Cepea/Esalq</strong>

                    <Link button type="button" to="/cafearab">
                    <button>
                    Acessar cotações
                    </button>
                    </Link>
                    <img src={coffeimg} alt="cafe"/>

                </li>

                <li>
                    <strong>Café Arábica 4/5 - B3 (Pregão Regular)</strong>



                    <Link button type="button" to="/cafeny">
                    <button>
                    Acessar cotações
                    </button>
                    </Link>
                    <img src={coffeimg} alt="coffe"/>

                </li>

                <li>
                    <strong>Indicador Café Robusta - Cepea/Esalq</strong>
                    <Link button type="button" to="/caferobus">
                    <button>
                    Acessar cotações
                    </button>
                    </Link>
                    <img src={coffeimg} alt="milho"/>

                </li>
          

            </ul>
    
        </div>
    );
}
