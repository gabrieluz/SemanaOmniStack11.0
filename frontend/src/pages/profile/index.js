import React, {useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi'
import './style.css';
import logoimg from '../../assets/logo.svg'
import api from '../../services/api';

export default function Profile(){
    const [incidents, setincidents]= useState([])
    const history = useHistory();
    const ongId = localStorage.getItem('ongid')
    const ongName= localStorage.getItem('ongName')
    
    
    useEffect(()=>{
        api.get('profile', {
            headers: {
                Authorization:ongId,
            }
        }).then(Response=>{
            setincidents(Response.data)
        })
    }, [ongId])

    async function handledeleteincident(id){
        try{
            await api.delete(`incidents/${id}`,{
            headers: {
                Authorization: ongId,
            }
        });
        setincidents(incidents.filter(incident => incident.id !== id))
        }catch(err){
            alert('erro ao deletar')
        }
    }

    async function handlelogout(){
        localStorage.clear()
        history.push('/')
    }

    return (
        <div className="profile-container">
            <header>
                <img src={logoimg} alt="be the hero"/>
                <span> bem vindo, {ongName}</span>

                <Link className="button" to='/incidents/new'> Cadastra novo caso</Link>
                <button onClick={handlelogout} type="button">
                <FiPower size={18} color="#e02041"/>
                </button>
                </header>
                <h1>Casos cadastrados</h1>
                <ul>
                    {incidents.map(incident=>(
                        <li key={incident.id}>
                        <strong>caso:</strong>
                    <p>{incident.title}</p>
                        <strong>descrição:</strong>
                    <p>{incident.description}</p>
                        <strong>valor:</strong>
                        <p>{Intl.NumberFormat('pt-BR', {style: 'currency', currency:'BRL'}).format(incident.value)}</p>
                        <button onClick={() => handledeleteincident(incident.id)} type="button">
                            <FiTrash2 size={20} color='#a8a8b3'/>
                        </button>
                    </li>
                    ))
                    }
                </ul>
        </div>
    )

}