import { useContext } from 'react';
import { DataList } from './components/DataList';
import { Context } from './Context/AuthContext';
import axios from 'axios';

var content = "";

function App2() {

	const { handleLogin, value, setValue, personagem, setPersonagem, buttonPopup, setButtonPopup} = useContext(Context);  

  if(content == "") {
    axios({
      method: "GET",
      url: "https://gpt3criatividade.herokuapp.com/acervo"
    }).then(res => {
      console.log("ANSWER");
      console.log(res.data);
  
      content = res.data;
      setPersonagem([...personagem, res.data]);
      handleLogin();
    }).catch(err => console.log(err))  }

  return (
    <main className="contentWrapper">
      <DataList/>
    </main>

  );
}

export default App2;
