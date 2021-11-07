import { GPTFunctions } from './openaiFunctions';

import express from "express";
import cors from "cors";
import OriginalCharacterDataType from "../middleware/OriginalCharacterDataType";

const app = express();
const port = 8080;

app.use(cors());
app.get('/', (req, res) => res.send('Hello World!'));


/*
Needed routes:

GET OriginalCharacter
GET semiOriginalCharacter
*/



// Returns an original character
app.get('/originalCharacter', (req, res) => {
    let data: OriginalCharacterDataType = <OriginalCharacterDataType><unknown>req.query;
    let gpt = new GPTFunctions(Number(data.maxTokens), Number(data.temp), Number(data.freqPenalty));
    

    var result = gpt.generateOriginalCharacter()
    .then((result) => {

        //sending the prompt to openAI, then showing it in the screen
        var newPrompt = gpt.sendGPTRequest(result)
        .then((newPrompt) =>{
            res.send(newPrompt)
        })
        
    });
});


app.listen(port, () => console.log(`Backend listening on port ${port}!`));