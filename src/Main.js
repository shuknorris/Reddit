import React from 'react';
import './Main.css';
import Header from './Header'
import Posts from './Posts';

function Main(){
   return(
    <div className='main'>
        <Header />
        <Posts /> 
     </div>   
    )
}
export default Main;
