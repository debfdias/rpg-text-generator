import React, { createContext, useState, useEffect} from 'react';
//import api from '../api';

const Context = createContext();

function AuthProvider({children}){

  const [value, setValue] = useState("");
  const [personagem, setPersonagem] = useState([]);

  useEffect(()=>{
        //baab
      }
        ,[]);
  
  async function handleLogin(){
    
    console.log("FUNCAO")
  }
  
  function handleLogout(){
    
  }

  function handleBack(){
    
  }

  return(
    <Context.Provider value={{value, setValue, personagem, setPersonagem, handleLogin, handleLogout, handleBack}}>
      {children}
    </Context.Provider>
  )
}

export { Context, AuthProvider };