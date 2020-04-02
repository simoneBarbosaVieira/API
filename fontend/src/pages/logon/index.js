import React,{useState} from 'react';
import {FiLogIn} from 'react-icons/fi';
import api from '../../services/api';
import {Link, useHistory} from 'react-router-dom';
import './styles.css';
import heroesImg from '../../assets/heroes.png'
import logoImg from '../../assets/logo.svg'


export default function Logon(){
    const [id, setId] = useState('');
    const history = useHistory();
   async function handleLogin(e){
        e.preventDefault();
        try {
       const response = await api.post('session',{id});
       console.log(response.data.nome)
       localStorage.setItem('ongId', id);
       localStorage.setItem('ongNome',response.data.nome)
        history.push('profile');    
        } catch (error) {
            alert('fala ao tentar realizar login, tente novamente.')
        }

    }
    return (
       <div className="logon-container">
           <section className="form">
           <img src={logoImg}alt="be the hereo"/>
           <form onSubmit={handleLogin}>
               <h1>
                   faça seu logon
               </h1>
               <input placeholder="sua id"
               value={id}
               onChange={e => setId(e.target.value)}/>
               <button className='button' type="submit">Entrar</button>
               <Link to="/register">
                   <FiLogIn size={16} color="#E02041"/>
                   Não Tenho Cadastro
               </Link>
           </form>
           </section>
           <img src={heroesImg}alt="Heroes"/>
       </div>





    );
}