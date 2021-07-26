import React, {useState} from "react";
import {Container} from './style'
import { Link } from 'react-router-dom';


const Home: React.FC = () => {
    
    
const [productName,setProductName] = useState("");
const [productCode,setProductCode] = useState("");
const [productBrand,setProductBrand] = useState("");
const [productSize,setProductSize] = useState("");
const [productQuantity,setProductQuantity] = useState("");
const [productWeight,setProductWeight] = useState("");
const [productPrice,setProductPrice] = useState("");
const [productDescription,setProductDescription] = useState("");


let productData=[{

    "Name" :productName,
    "Code" :productCode,
    "Brand":productBrand,
    "Size":productSize,
    "Quantity":productQuantity,
    "Weight":productWeight,
    "Price":productPrice,
    "Description":productDescription,
    
    
    }];

    let index= 0;
    
   
function productRegistry () {

 const productDataStorage = JSON.stringify(productData)
 
   localStorage.setItem(`@usuário-${index}`, productDataStorage)
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
   <input placeholder="Nome" className="inputText" value={productName} onChange={e=>{ setProductName(e.target.value)}}/>
   
   </div>
   <div className="sectionTwo">
   <h1 className="fildName" >Código</h1>
   <input placeholder="Código" className="inputText" value={productCode} onChange={e=>setProductCode(e.target.value)}/>
   
   </div>
   <div className="sectionTwo">
   <h1 className="fildName" >Marca</h1>
   <input placeholder="Marca" className="inputText" value={productBrand} onChange={e=>setProductBrand(e.target.value)}/>
   
   </div>
   <div className="sectionTwo">
   <h1 className="fildName" >Dimenção</h1>
   <input placeholder="Dimenção" className="inputText" value={productSize} onChange={e=>setProductSize(e.target.value)}/>
   
   
   </div>
   <div className="sectionTwo">
   <h1 className="fildName" >Quantidade</h1>
   <input placeholder="Quantidade" className="inputText" value={productQuantity} onChange={e=>setProductQuantity(e.target.value)}/>
   
   </div>
   <div className="sectionTwo">
   <h1 className="fildName" >Peso</h1>
   <input placeholder="Peso" className="inputText" value={productWeight} onChange={e=>setProductWeight(e.target.value)}/>
   
   </div>
   <div className="sectionTwo">
   <h1 className="fildName" >Preço</h1>
   <input placeholder="Preço" className="inputText" value={productPrice} onChange={e=>setProductPrice(e.target.value)}/>
   
   </div>
   <div className="sectionTwo">
   <h1 className="fildName" >Descrição</h1>
   <input placeholder="Descrição" className="inputText" value={productDescription} onChange={e=>setProductDescription(e.target.value)}/>
   
   </div>

   </div>

   <div className="sectionTwo">
   
</div>
</div>

<button className="button" placeholder="Cadastrar" onClick={()=>productRegistry()}>Cadastrar</button>



</div> 

<Link to ="/home" className="link"> Voltar</Link>


</section>

   </Container>
   
  );
}

export default Home;