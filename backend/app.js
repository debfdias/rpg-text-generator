import { GPTFunctions } from './openaiFunctions.js';

import express from 'express';

const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello World!'));


/*
Needed routes:

GET OriginalCharacter
GET semiOriginalCharacter
*/

const gpt = new GPTFunctions(200, 0.7, 0.4);

// Returns an original character
app.get('/originalCharacter', (req, res) => {
    //getting the prompt from a file in the server.
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