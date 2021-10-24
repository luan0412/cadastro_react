import React from 'react';
import './Tela.css';
import logo from './react-native-logo.png';
export default function Cadastrar(){
    return(
        <div className="main">
           
            <form className="form">
            <div className="nome">
            <h1>
                Cadastro 
            </h1>
                <p>Preencha os dados abaixo para começar </p>
                    <input type="text" name="nome" placeholder="Nome"></input>
                </div>
                <div className="sobrenome">
                    <input type="text" name="sobrenome" placeholder="Sobrenome"></input>
                </div>
                <div className="email">
                    <input type="email" name="email" placeholder="E-mail"></input>
                </div>
                <div className="senha">
                    <input type="password" name="senha" placeholder="Senha"></input>
                    </div>
                <button className="botao"> Concluir cadastro </button>
                </form>
                <img src={logo} />
        </div>
    )
}