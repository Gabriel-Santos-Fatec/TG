import React, { useEffect, useState } from 'react';
import api from "../../../services/api";
import { Link } from 'react-router-dom';
import logoImg from "../../../assets/logo.svg";
import "./styles.css";
import laranjaimg from "../../../assets/laranja.png";


export default function LaranjaCeasas (){
        const [valor, setValor]= useState();
        const [data, setData]= useState();
        const [variacao, setVariacao]= useState();
    
        useEffect(() => {
            async function fetchData(){
                const response = await api.post("/bot", {codigo:'10'});
                console.log(response);
                setValor(response.data.valor)
                setData(response.data.data)
                setVariacao(response.data.variacao)
            }
    
            fetchData()
          },[]);
    return (
        <div className="menu-container">
             <header>
                <img src={logoImg} alt="Logo"/>
                <Link button type="button" to="/laranja">
                    <button>Voltar</button>
                </Link>
            </header>   
            <ul>
                <li>
                    <h1>Laranja Pera In Natura</h1>
                    <img src={laranjaimg} alt="algodao"/>
                </li>
                <li>
                    <h2>Valor: Caixa 40,8 kg R$: {valor}</h2>
                    <h2>Data: {data}</h2> 
                    <h2>Variação: {variacao}</h2>
                </li>
            </ul>
        </div>
    );
}
