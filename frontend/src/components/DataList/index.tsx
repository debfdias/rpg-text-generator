import { useEffect, useState } from 'react';
import React, { useContext } from 'react';
import ReactDOM from 'react-dom'

import { Context } from '../../Context/AuthContext';

import "./styles.css";
import { GiSplitArrows } from 'react-icons/gi';

export function DataList()
{
	const { handleLogin, value, setValue, personagem, setPersonagem, buttonPopup, setButtonPopup} = useContext(Context);  

	const [data, setData] = useState([]);

	useEffect(() => {
		//rota API

	}, [])

	function retornaElemento(entrada:string, index:number){
		var valor = entrada

		if(valor.indexOf("Status") != -1){
			
			//console.log(valor.split('\n'))
			//console.log(valor.split("Status"))
			var cdd = valor.split('\n')
			
			var pttt = valor.split("Status")
			

			var identidade = pttt[0].split(":")
			//console.log(identidade)
			var nome = identidade[1].split("\n")[0]
			
			return(
			<div className="gradBorder" >
				<li className="dataCard" key={index}>
					<div className="dataContent"> {cdd.map((atributo, index) => (
						<li key={index}>{atributo}</li>
						))}</div>

					<div className="dataUser">
						<div className="userImage">
			<img src="https://e7.pngegg.com/pngimages/631/210/png-clipart-the-witcher-3-wild-hunt-gwent-the-witcher-card-game-geralt-of-rivia-the-last-wish-world-of-the-witcher-video-game-sticker-thumbnail.png" />
			</div>
			<span>{nome}</span>
					</div>
				</li>
			</div>)
		}else{
			return("+++");
		}
	}

	return(
		<div className="dataListWrapper"> 

			<ul className="dataList">
				<h1 className="headerText"> Last generated texts:</h1>

				{personagem.map((p:string, index:number) => retornaElemento(p, index))}
			</ul>


		</div>
		

	)
}