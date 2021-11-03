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
    var result = gpt.generateOriginalCharacter()
    .then((result) => res.send(result));
});

//app.get('/originalCharacter', gpt.generateOriginalCharacter())


app.listen(port, () => console.log(`Backend listening on port ${port}!`));