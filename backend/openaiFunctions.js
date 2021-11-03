/*
var envir = require('dotenv').config();
var got = require('got');
var fs = require('fs');
*/
import { readFileSync } from "fs";
import { json } from "express";
import config from "dotenv";
import post from "got";

export class GPTFunctions {
    // API parameters
    _maxTokens = 200;
    _temp = 0.7;
    _freqPenalty = 0.4;
    _url = 'https://api.openai.com/v1/engines/davinci/completions';
    
    
    GPTFunctions(maxTokens, temp, freqPenalty){
        this._maxTokens = maxTokens;
        this._temp = temp;
        this._freqPenalty = freqPenalty;
    }

    async sendGPTRequest(prompt){
        const params = {
            "prompt": prompt,
            "max_tokens": this._maxTokens,
            "temperature": this._temp,
            "frequency_penalty": this._freqPenalty
        };
        const headers = {
            'Authorization': `Bearer ${process.env.SECRET_API_KEY}`,
        };
    
        var result = "";
    
        try {
            const response = await post(this._url, { json: params, headers: headers }).json();
            var output = `${prompt}${response.choices[0].text}`;
            console.log(output);
            result = output;
        } catch (err) {
            console.log(err);
        }
    
        return result;
    }

    async generateOriginalCharacter(){
        const input = await readFileSync("./inputModels/originalCharacters.txt", 'utf-8');
        //var result = await this.sendGPTRequest(input);
        var result = input;
        return result;
    }

    setMaxTokens (newMax){
        this._maxTokens = newMax;
    }

    setTemp (newTemp){
        this._temp = newTemp;
    }

    setFrequencyPenalty (newFreqPenalty){
        this._freqPenalty = newFreqPenalty;
    }
    
}