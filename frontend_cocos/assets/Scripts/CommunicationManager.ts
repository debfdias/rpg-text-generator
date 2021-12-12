import SemiOriginalCharacterDataType from "../../../middleware/SemiOriginalCharacterDataType"

//var SERVER_URL = "https://gpt3criatividade.herokuapp.com";
var SERVER_URL = "http://localhost:8080";

export default class CommunicationManager {
    public async getSemiOriginalCharacter(toComplete: SemiOriginalCharacterDataType) : Promise<SemiOriginalCharacterDataType>
    {
        return new Promise((res, rej) => {
            var request = new XMLHttpRequest();
            var toQuery = JSON.stringify(toComplete);
            request.open("GET", SERVER_URL + "/semiOriginalCharacter?json=" + toQuery, true);
            request.onreadystatechange = () => {
                if(request.readyState == request.DONE) {
                    console.log(request.responseText)
                    res(JSON.parse(request.responseText))
                }
            }
            request.send();
        });
        // .then(res => {
        //     console.log("ANSWER");
        //     console.log(res.data);
      
        //     //setValue(res.data)
        //     setPersonagem([...personagem, res.data]);
        //   }).catch(err => console.log(err))
    }
}