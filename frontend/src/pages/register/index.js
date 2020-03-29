import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

import api from '../../services/api'

import '../../global.css'
import './style.css';
import logoimg from '../../assets/logo.svg'

export default function Register(){
    const[name, setName]= useState('')
    const[email, setEmail]= useState('')
    const[whatsapp, setwhatsapp]= useState('')
    const[city, setCity]= useState('')
    const[uf, setUf]= useState('')

    const history = useHistory();

    async function handleRegister(e){
        e.preventDefault();
        
        const data ={
            name,
            email,
            whatsapp,
            city,
            uf,
        }
        
        try{
        const response = await api.post('ongs', data)
        
        alert(`Seu ID de acesso: ${response.data.id}`);
        history.push('/')
    }catch(err){
        alert('Erro no cadastro, tente novamente')
    }
}

    return (
       <div className="register-container"> 
            <div className="content">
                <section>
                    <img src={logoimg} alt="be the hero"/>

                    <h1>Cadastror</h1>
                    <p>Faça seu cadastro, 
                        entre na plataforma e ajuda pessoas a encontrarem os casos da sua ONG</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size = {16} color="#e02041"/>
                        Voltar
                    </Link>
                </section>
                <form onSubmit={handleRegister}>
                    <input 
                    placeholder="Nome da ONG" 
                    value={name} 
                    onChange={e => setName(e.target.value)}
                    />
                    <input 
                    type="email" placeholder="E-mail"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    />
                    <input 
                    placeholder="whatsapp"
                    value={whatsapp}
                    onChange={e => setwhatsapp(e.target.value)}
                    />
                    <div className="input-group">
                        <input 
                        placeholder="Cidade"
                        value={city}
                        onChange={e => setCity(e.target.value)}
                        />
                        <input 
                        placeholder="UF" style={{width: 80}}
                        value={uf}
                        onChange={e => setUf(e.target.value)}
                        />
                    </div>
                    <button className="button" type="Submit"> Cadastrar</button>
                </form>
            </div>

        </div>

    )
}

