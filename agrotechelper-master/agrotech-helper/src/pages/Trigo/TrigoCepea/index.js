import React, { useEffect, useState } from 'react';
import api from "../../../services/api";
import { Link } from 'react-router-dom';
import logoImg from "../../../assets/logo.svg";
import "./styles.css";
import trigoimg from "../../../assets/trigo.png";


export default function TrigoCepea (){
    const [valor, setValor]= useState();
    const [data, setData]= useState();
    const [variacao, setVariacao]= useState();

    useEffect(() => {
        async function fetchData(){
            const response = await api.post("/bot", {codigo:'5'});
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
                <Link button type="button" to="/trigo">
                    <button>Voltar</button>
                </Link>
            </header>   
            <ul>
                <li>
                    <h1>Trigo Atacado - Média PR</h1>
                    <img src={trigoimg} alt="algodao"/>
                </li>
                <li>
                    <h2>Valor: R$: {valor}</h2>
                    <h2>Data: {data}</h2> 
                    <h2>Variação: {variacao}%</h2>
                </li>
            </ul>
        </div>
    );
}
