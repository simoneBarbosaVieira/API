import React, {useState} from 'react';
import logoImg from '../../assets/logo.svg'
import {FiArrowLeft} from 'react-icons/fi';
import api from '../../services/api';
import {Link,useHistory} from 'react-router-dom';
import './styles.css';

export default function Register(){
    const [nome,setNome] = useState('');
    const [email,setEmail] = useState('');
    const [whatsapp,setWhatsapp] = useState('');
    const [city,setCity] = useState('');
    const [uf,setUf] = useState('');
    const history = useHistory();
   async function handleRegister(e){
        e.preventDefault();
        const data ={
            nome,
            email,
            whatsapp,
            city,
            uf
        };
        try {
       const response = await api.post('ongs',data);
    
       alert(`Seu id de acesso: ${response.data.id}`);
        history.push('/');
        }catch(err){
       alert('Error no cadastro, tente novamente.');
        }
        
    }
    return (
        <div className="register-conteiner">
            <div className="content">
                <section>
                 <img src={logoImg} alt = "Be the Hero"/>
                 <h1>Cadastro</h1>
                 <p>Faça seu Cadastro, entre na plataforma e ajude pessoas encontrarem os casos de sua ONG</p>
                 <Link className="back-link" to="/">
                   <FiArrowLeft size={16} color="#E02041"/>
                   Não Tenho Cadastro
               </Link>
                </section>
                <form onSubmit={handleRegister}>
                <input placeholder="Nome da ONG" value={nome}
                onChange={e=>setNome(e.target.value)}/>
                <input type ="email"placeholder="E-mail"value={email}
                onChange={e=>setEmail(e.target.value)}/>
                <input placeholder="whatsApp"value={whatsapp}
                onChange={e=>setWhatsapp(e.target.value)}/>
                <div className= 'input-group'>
                  <input placeholder="Cidade"value={city}
                onChange={e=>setCity(e.target.value)}/>  
                  <input placeholder="UF"
                 style={{width: 80}}value={uf}
                 onChange={e=>setUf(e.target.value)}/>
                </div>
                <button className='button' type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
        

    )
    

    
}