import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from "../../assets/logo.svg";
import "./styles.css";

import algodaoimg from "../../assets/algodao.png";

export default function Algodao (){
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
                    <strong>Algodão - Indicador Cepea/Esalq</strong>

                    <Link button type="button" to="/algodaoceapa">
                    <button>
                    Acessar cotações
                    </button>
                    </Link>
                    <img src={algodaoimg} alt="algodao"/>

                </li>

                <li>
                    <strong>Algodão em Pluma</strong>



                    <Link button type="button" to="/algodaony">
                    <button>
                    Acessar cotações
                    </button>
                    </Link>
                    <img src={algodaoimg} alt="algodao"/>

                </li>

                <li>
                    <strong>Algodão - IMEA</strong>
                    <Link button type="button" to="/algodaoimea">
                    <button>
                    Acessar cotações
                    </button>
                    </Link>
                    <img src={algodaoimg} alt="algodao"/>

                </li>
          

            </ul>
    
        </div>
    );
}
