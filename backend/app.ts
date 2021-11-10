import { GPTFunctions } from './openaiFunctions';

import express from "express";
import cors from "cors";
import OriginalCharacterDataType from "../middleware/OriginalCharacterDataType";
const path = require('path')

const app = express();

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, '../frontend/public')))

app.use(cors());
app.get('/', (req, res) => res.send('Hello World!'));

// Returns an original character
app.get('/originalCharacter', (req, res) => {
    let data: OriginalCharacterDataType = <OriginalCharacterDataType><unknown>req.query;
    let gpt = new GPTFunctions(Number(data.maxTokens), Number(data.temp), Number(data.freqPenalty));
    
    var result = gpt.generateOriginalCharacter()
    .then((result) => {
        res.send(result)
    });

});

// AFTER defining routes: Anything that doesn't match what's above, send back index.html; (the beginning slash ('/') in the string is important!)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/../frontend/public/index.html'))
  })

app.listen(process.env.PORT || 8080, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env)
});