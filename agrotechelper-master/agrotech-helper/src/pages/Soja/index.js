import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from "../../assets/logo.svg";
import "./styles.css";
import sojaimg from "../../assets/soja.png";


export default function Soja (){
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
                    <strong>Soja - Bolsa de Chicago</strong>

                    <Link button type="button" to="/sojachicago">
                    <button>
                    Acessar cotações
                    </button>
                    </Link>
                    <img src={sojaimg} alt="soja"/>

                </li>

                <li>
                    <strong>Indicador da Soja Cepea/Esalq - Paraná</strong>



                    <Link button type="button" to="/sojaceapa">
                    <button>
                    Acessar cotações
                    </button>
                    </Link>
                    <img src={sojaimg} alt="soja"/>

                </li>

                <li>
                    <strong>Soja CME - B3 (Pregão Regular)</strong>
                    <Link button type="button" to="/sojacme">
                    <button>
                    Acessar cotações
                    </button>
                    </Link>
                    <img src={sojaimg} alt="milho"/>

                </li>
          

            </ul>
    
        </div>
    );
}
