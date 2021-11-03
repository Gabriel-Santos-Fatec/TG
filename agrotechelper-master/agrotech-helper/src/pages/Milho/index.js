import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from "../../assets/logo.svg";
import "./styles.css";
import milhoimg from "../../assets/milho.png";

export default function Menu (){
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
                    <strong>Milho - B3 (Pregão Regular)</strong>

                    <Link button type="button" to="/milhob3">
                    <button>
                    Acessar cotação
                    </button>
                    </Link>
                    <img src={milhoimg} alt="milho"/>

                </li>

                <li>
                    <strong>Indicador do Milho Esalq/B3</strong>



                    <Link button type="button" to="/milhoesalq">
                    <button>
                    Acessar cotação
                    </button>
                    </Link>
                    <img src={milhoimg} alt="milho"/>

                </li>

                <li>
                    <strong>Milho - Bolsa de Chicago</strong>
                    <Link button type="button" to="/milhochicago">
                    <button>
                    Acessar cotação
                    </button>
                    </Link>
                    <img src={milhoimg} alt="milho"/>

                </li>
          

            </ul>
    
        </div>
    );
}
