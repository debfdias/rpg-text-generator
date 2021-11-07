import { useEffect, useState } from 'react';

import "./styles.css";

export function DataList()
{
	const [data, setData] = useState([]);

	useEffect(() => {
		//rota API

	}, [])


	return(
		<div className="dataListWrapper"> 

			<ul className="dataList">
				<h1 className="headerText"> Last generated texts:</h1>

				<div className="gradBorder">
					<li className="dataCard">
						<p className="dataContent"> It is a long established fact that a reader will be 
						distracted by the readable content of a page when looking at its layout. 
						The point of using Lorem Ipsum is that it has a more-or-less normal distribution 
						of letters making it look like readable English. </p>

						<div className="dataUser">
							<div className="userImage">
	              <img src="https://e7.pngegg.com/pngimages/631/210/png-clipart-the-witcher-3-wild-hunt-gwent-the-witcher-card-game-geralt-of-rivia-the-last-wish-world-of-the-witcher-video-game-sticker-thumbnail.png" />
	            </div>
	            <span>Fulano de tal</span>
						</div>
					</li>
				</div>

				<div className="gradBorder">
					<li className="dataCard">
						<p className="dataContent"> There are many variations of passages of Lorem Ipsum 
						available, but the majority have suffered alteration in some form, 
						by injected humour, or randomised words which dont look even slightly believable. 
						If you are going to use a passage of Lorem Ipsum, you need to be sure there 
						isnt anything embarrassing hidden in the middle of text. </p>

						<div className="dataUser">
							<div className="userImage">
	              <img src="https://e7.pngegg.com/pngimages/631/210/png-clipart-the-witcher-3-wild-hunt-gwent-the-witcher-card-game-geralt-of-rivia-the-last-wish-world-of-the-witcher-video-game-sticker-thumbnail.png" />
	            </div>
	            <span>João de Tal</span>
						</div>
					</li>
				</div>

				<div className="gradBorder">
					<li className="dataCard">
						<p className="dataContent"> Contrary to popular belief, Lorem Ipsum is not simply 
						random text. It has roots in a piece of classical Latin literature from 45 BC, 
						making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney 
						College in Virginia, looked up one of the more obscure Latin words. </p>

						<div className="dataUser">
							<div className="userImage">
	              <img src="https://e7.pngegg.com/pngimages/631/210/png-clipart-the-witcher-3-wild-hunt-gwent-the-witcher-card-game-geralt-of-rivia-the-last-wish-world-of-the-witcher-video-game-sticker-thumbnail.png" />
	            </div>
	            <span>Maria de Tal</span>
						</div>
					</li>
				</div>

			</ul>

		</div>

	)
}