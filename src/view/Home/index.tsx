import React, {useState} from "react";
import {Container} from './style'
import api from "../../services/api";
import { useEffect } from "react";
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
  
<div className="sectionOne">
<h1 className="title" >
     Bem vindo ao programa cadastro de cliente / produto</h1>
  
</div> 

<div className="sectionTwo">

<Link to ="/client" className = "links"> Cadastrar cliente </Link>

<Link to ="/product" className = "links" > Cadastrar produto</Link>

</div>

</div>
</section>

   </Container>
   
  );
}

export default Home;