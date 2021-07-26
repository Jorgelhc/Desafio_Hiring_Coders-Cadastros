import React from "react";
import {Container} from './style'
import { Link } from 'react-router-dom';


const Home: React.FC = () => {
    
  
  return( 

<Container>
    
<section>


<div className="sectionOne">
<h1 className="title" >
     Bem vindo ao programa cadastro de cliente / produto</h1>
  
</div> 

<div className="sectionTwo">

<Link to ="/client" className = "links"> Cadastrar cliente </Link>

<Link to ="/product" className = "links" > Cadastrar produto</Link>

</div>


</section>

   </Container>
   
  );
}

export default Home;