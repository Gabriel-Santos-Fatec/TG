import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from "../../assets/logo.svg";
import "./styles.css";
import feijaoimg from "../../assets/feijao.png";

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
                    <strong>Feijão Carioca nota 8,5</strong>

                    <Link button type="button" to="/feijao85">
                    <button>
                    Acessar cotação
                    </button>
                    </Link>
                    <img src={feijaoimg} alt="feijao"/>

                </li>

                <li>
                    <strong>Feijão Carioca nota 9/9,5</strong>



                    <Link button type="button" to="/feijaocaupi">
                    <button>
                    Acessar cotação
                    </button>
                    </Link>
                    <img src={feijaoimg} alt="feijao"/>

                </li>

                <li>
                    <strong>Feijão Preto</strong>
                    <Link button type="button" to="/feijaopreto">
                    <button>
                    Acessar cotação
                    </button>
                    </Link>
                    <img src={feijaoimg} alt="feijao"/>

                </li>
          

            </ul>
    
        </div>
    );
}
