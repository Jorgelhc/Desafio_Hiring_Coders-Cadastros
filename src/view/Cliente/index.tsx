import React, {useState} from "react";
import {Container} from './style'
import { Link } from 'react-router-dom';


const Home: React.FC = () => {
    
    
const [userName,setUserName] = useState("");
const [userLastName,setUserLastName] = useState("");
const [userTelephone,setUserTelephone] = useState("");
const [userCPF,setUserCPF] = useState("");
const [userEmail,setUserEmail] = useState("");
const [userAdress,setUserAdress] = useState("");
const [userCity,setUserCity] = useState("");
const [userState,setUserState] = useState("");
const [userZipCode,setUserZipCode] = useState("");


let userData=[{

    "Name" :userName,
    "LastName" :userLastName,
    "Telephone":userTelephone,
    "CPF":userCPF,
    "Email":userEmail,
    "Adress":userAdress,
    "City":userCity,
    "State":userState,
    "ZipCode":userZipCode,
    
    }];

    let index= 0;
    
   
function userRegistry () {

 const userDataStorage = JSON.stringify(userData)
 
   localStorage.setItem(`@usuário-${index}`, userDataStorage)
   index++

  
   

}
 
  return( 
    
<Container>
  
<section>

<div>


    <h1 className="title" >Cadastro de cliente </h1>

<div className="datainput">
  
   <div>


   
   <div className="sectionTwo">
   <h1 className="fildName" >Nome</h1>
   <input placeholder="Nome" className="inputText" value={userName} onChange={e=>{ setUserName(e.target.value)}}/>
   
   </div>
   <div className="sectionTwo">
   <h1 className="fildName" >Sobrenome</h1>
   <input placeholder="Sobrenome" className="inputText" value={userLastName} onChange={e=>setUserLastName(e.target.value)}/>
   
   </div>
   <div className="sectionTwo">
   <h1 className="fildName" >Telefone</h1>
   <input placeholder="Telefone" className="inputText" value={userTelephone} onChange={e=>setUserTelephone(e.target.value)}/>
   
   </div>
   <div className="sectionTwo">
   <h1 className="fildName" >CPF</h1>
   <input placeholder="CPF" className="inputText" value={userCPF} onChange={e=>setUserCPF(e.target.value)}/>
   
   
   </div>
   <div className="sectionTwo">
   <h1 className="fildName" >Email</h1>
   <input placeholder="Email" className="inputText" value={userEmail} onChange={e=>setUserEmail(e.target.value)}/>
   
   </div>
   <div className="sectionTwo">
   <h1 className="fildName" >Endereço</h1>
   <input placeholder="Endereço" className="inputText" value={userAdress} onChange={e=>setUserAdress(e.target.value)}/>
   
   </div>
   <div className="sectionTwo">
   <h1 className="fildName" >Cidade</h1>
   <input placeholder="Cidade" className="inputText" value={userCity} onChange={e=>setUserCity(e.target.value)}/>
   
   </div>
   <div className="sectionTwo">
   <h1 className="fildName" >Estado</h1>
   <input placeholder="Estado" className="inputText" value={userState} onChange={e=>setUserState(e.target.value)}/>
   
   </div>

   <div className="sectionTwo">
   <h1 className="fildName" >CEP</h1>
   <input placeholder="CEP" className="inputText" value={userZipCode} onChange={e=>setUserZipCode(e.target.value)}/>

   </div>
   </div>

   <div className="sectionTwo">
   
</div>
</div>

<button className="button" placeholder="Cadastrar" onClick={()=>userRegistry()}>Cadastrar</button>



</div> 

<Link to ="/" className="link"> Voltar</Link>


</section>

   </Container>
   
  );
}

export default Home;