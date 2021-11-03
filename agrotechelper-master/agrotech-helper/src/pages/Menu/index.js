import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from "../../assets/logo.svg";
import "./styles.css";
import sojaimg from "../../assets/soja.png";
import coffeimg from "../../assets/cafe.png";
import milhoimg from "../../assets/milho.png";
import amendoimimg from "../../assets/amendoim.png";
import laranjaimg from "../../assets/laranja.png";
import trigoimg from "../../assets/trigo.png";
import algodaoimg from "../../assets/algodao.png";
import feijaoimg from "../../assets/feijao.png";
import bemvindoimg from "../../assets/bemvindo.png";



export default function Menu (){
    return (
        <div className="menu-container">
            <header>
                <img src={logoImg} alt="Logo"/>
                <img src={bemvindoimg} alt="bem"/>
            </header>
            <h1>Culturas</h1>
            <ul>
                <li>
                    <strong>CULTURA: SOJA</strong>

                    <Link button type="button" to="/soja">
                    <button>
                    Acessar menu de cotações
                    </button>
                    </Link>
                    <img src={sojaimg} alt="soja"/>

                </li>

                <li>
                    <strong>CULTURA: CAFÉ</strong>



                    <Link button type="button" to="/cafe">
                    <button>
                    Acessar menu de cotações
                    </button>
                    </Link>
                    <img src={coffeimg} alt="cafe"/>

                </li>

                <li>
                    <strong>CULTURA: MILHO</strong>
                    <Link button type="button" to="/milho">
                    <button>
                    Acessar menu de cotações
                    </button>
                    </Link>
                    <img src={milhoimg} alt="milho"/>

                </li>

                <li>
                    <strong>CULTURA: LARANJA</strong>
                    <Link button type="button" to="/laranja">
                    <button>
                    Acessar menu de cotações
                    </button>
                    </Link>
                    <img src={laranjaimg} alt="laranja"/>

                </li>

                <li>
                    <strong>CULTURA: ALGODÃO</strong>
                    <Link button type="button" to="/algodao">
                    <button>
                    Acessar menu de cotações
                    </button>
                    </Link>
                    <img src={algodaoimg} alt="algodao"/>

                </li>

                <li>
                    <strong>CULTURA: TRIGO</strong>
                    <Link button type="button" to="/trigo">
                    <button>
                    Acessar menu de cotações
                    </button>
                    </Link>
                    <img src={trigoimg} alt="trigo"/>

                </li>

                <li>
                    <strong>CULTURA: FEIJÃO</strong>
                    <Link button type="button" to="/feijao">
                    <button>
                    Acessar menu de cotações
                    </button>
                    </Link>
                    <img src={feijaoimg} alt="feijao"/>

                </li>

                <li>
                    <strong>CULTURA: AMENDOIM</strong>
                    <Link button type="button" to="/amendoim">
                    <button>
                    Acessar menu de cotações
                    </button>
                    </Link>
                    <img src={amendoimimg} alt="amendoim"/>

                </li>



            

            </ul>
    
        </div>
    );
}
