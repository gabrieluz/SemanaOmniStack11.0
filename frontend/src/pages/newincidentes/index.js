import React,{ useState} from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link , useHistory} from 'react-router-dom';
import './style.css'
import logoimg from '../../assets/logo.svg'
import api from '../../services/api'


export default function NewIncident(){

    const[title,setTitle]=useState('')
    const[description,setDescription]=useState('')
    const[value,setValue]=useState('')

    const history = useHistory()
    const ongid = localStorage.getItem('ongid')

async function handlenewincident(e){
    e.preventDefault()
    const data={
        title,
        description,
        value,
    }
    try{
        await api.post('incidents', data,{
            headers:{
                Authorization: ongid,
            }
        })
        history.push('/profile')
    }catch(err){
        alert('erro no cadastro')
    }
}

    return (
    <div className="new-incident"> 
        <div className="content">
            <section>
                <img src={logoimg} alt="be the hero"/>

                <h1>Cadastror novo caso</h1>
                <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>

                <Link className="back-link" to="/profile">
                    <FiArrowLeft size = {16} color="#e02041"/>
                    Voltar para home
                </Link>
            </section>
            <form onSubmit={handlenewincident} >
                <input 
                placeholder="Titulo do caso"
                value={title}
                onChange={e => setTitle(e.target.value)}
                />
                <textarea 
                placeholder="Descrição"
                value={description}
                onChange={e => setDescription(e.target.value)}
                />
                <input 
                placeholder="Valor em reais"
                value={value}
                onChange={e => setValue(e.target.value)}
                />
                <button className="button" type="submit"> Cadastrar</button>
            </form>
        </div>

    </div>

    )
}