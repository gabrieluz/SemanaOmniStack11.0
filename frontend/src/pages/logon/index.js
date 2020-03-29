import React, {useState} from 'react';
import {Link , useHistory} from 'react-router-dom'
import './style.css';
import '../../global.css'

import api from '../../services/api'
import { FiLogIn } from 'react-icons/fi'

import logoimg from '../../assets/logo.svg'
import heroesimg from '../../assets/heroes.png';



export default function Logon(){
    const [id, setId] = useState('');
    const history = useHistory();
    async function handlelogin(e){
        e.preventDefault();
       
        try{
            const response = await api.post('session', {id})
            
            localStorage.setItem('ongid', id)
            localStorage.setItem('ongName', response.data.name)
            history.push('/profile')
        }catch(err){
            alert('tente novamente')
        }
    }

    return(
        <div className="logon-container">
            <section className="form">
                <img src={logoimg} alt="Be the Hero"/>

                <form onSubmit={handlelogin}>
                    <h1>Faça seu logon</h1>

                    <input 
                    placeholder="Sua id"
                    value={id}
                    onChange={e => setId(e.target.value)}
                    />
                    <button className = "button"type='submit'> Entrar </button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size = {16} color="#e02041"/>
                        Não tenho cadastro</Link>
                </form>
            </section>
            <img src={heroesimg} alt="Heroes"/>
        </div>
    );
}