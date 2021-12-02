import { GPTFunctions } from './openaiFunctions';
import { processInput, testProcessInput } from './utils';

import express from "express";
import cors from "cors";
import OriginalCharacterDataType from "../middleware/OriginalCharacterDataType";
import SemiOriginalCharacterDataType from "../middleware/SemiOriginalCharacterDataType";
const path = require('path')

const app = express();

let list_of_characters: string[] = [];
    
list_of_characters.push("Char 1");

list_of_characters.push("Char 2");

list_of_characters.push("Char 3");

list_of_characters.push("Char 4");

list_of_characters.push("Char 5");

list_of_characters.push("Char 6");

list_of_characters.push("Char 7");

list_of_characters.push("Char 8");

list_of_characters.push("Char 9");

list_of_characters.push("Char 10");

// Serve static files from the React frontend app
 app.use(express.static(path.join(__dirname, '../frontend/public')))

app.use(cors());
// app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/../frontend/public/index.html')));

// Returns an original character
app.get('/originalCharacter', (req, res) => {
    let data: OriginalCharacterDataType = <OriginalCharacterDataType><unknown>req.query;
    let gpt = new GPTFunctions(Number(data.maxTokens), Number(data.temp), Number(data.freqPenalty));
    
    var result = gpt.generateOriginalCharacter()
    .then((result) => {
        res.send(result)
    });

});

app.get('/semiOriginalCharacter', (req, res) => {

    let data: SemiOriginalCharacterDataType = <SemiOriginalCharacterDataType><unknown>req.query;
    let gpt = new GPTFunctions(Number(data.maxTokens), Number(data.temp), Number(data.freqPenalty));
    let input = processInput(data);
    var result = gpt.generateSemiOriginalCharacter(input)
    .then((result) => {
        res.send(result)
    });

});


app.get('/acervo', (req, res) => {
    let data: OriginalCharacterDataType = <OriginalCharacterDataType><unknown>req.query;

    (list_of_characters) => { res.send(list_of_characters) };
    
});

// AFTER defining routes: Anything that doesn't match what's above, send back index.html; (the beginning slash ('/') in the string is important!)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/../frontend/public/index.html'))
  })

app.listen(process.env.PORT || 8080, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
    //console.log(testProcessInput());
});