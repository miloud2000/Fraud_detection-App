import React from 'react';
import '../../App.css';
import ButtonClick from '../Result';
import Services from './Services';
import FileUpload from '../Form';
import "../Form.css"  ;  
import Footer from '../Footer';   


export default function Products() {
 
  
  return (
   <div  > 
    <br/>
    <p className='div4'>Fraud Detection App- veuillez  choisir un fichier</p>
    <br/>
  <FileUpload/>
  <br/>
  <br/>
  <Footer />
   </div>
  
  );
  
}
