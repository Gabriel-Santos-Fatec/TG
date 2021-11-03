import React from "react";
import "./styles.css";
import { Link } from 'react-router-dom';
import logoImg from "../../assets/logo.svg";


export default function Logon() {
  return (
    <div className="logon-container">
          <section className="form">
            <form>
              <img src={logoImg} alt="logo" />
              <h3>Bem vindo ao</h3>
              <h2>AgroTech Helper!</h2>
              <h5>Clicke em "Menu" para acessar o menu de cotações!</h5>
              <Link button type="button" to="/menu">
                    <button>MENU</button>
              </Link>
            </form>
          </section>
    </div>
  );
}
