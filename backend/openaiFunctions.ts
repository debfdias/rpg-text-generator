/*
var envir = require('dotenv').config();
var got = require('got');
var fs = require('fs');
*/
import { readFileSync } from "fs";
import { json } from "express";
import dotenv from "dotenv";
import got from "got";

dotenv.config();

export class GPTFunctions {
    // API parameters
    _maxTokens = 100;
    _temp = 0.7;
    _freqPenalty = 0.4;
    _url = 'https://api.openai.com/v1/engines/davinci/completions';
    
    
    constructor(maxTokens: number, temp: number, freqPenalty: number){
        this._maxTokens = maxTokens;
        this._temp = temp;
        this._freqPenalty = freqPenalty;
    }

    async sendGPTRequest(prompt){
        const params = {
            "prompt": prompt,
            "max_tokens": this._maxTokens,
            "temperature": this._temp,
            "frequency_penalty": this._freqPenalty,
            "presence_penalty": 0.6
        };
        const headers = {
            'Authorization': `Bearer ${process.env.SECRET_API_KEY}`,
        };
    
        var result = "";
        try {
            const response  = await got.post(this._url, { json: params, headers: headers }).json<any>();
            result = response.choices[0].text;
        } catch (err) {
            console.log(err);
        }
    
        return result;
    }

    async generateOriginalCharacter(){
        const model = await readFileSync("./inputModels/dndmodelsSmall.txt", 'utf-8');
        var response = "";
        
        // Sending the request to openai
        response = await this.sendGPTRequest(model);
        console.log(response);
        return response;
    }

    async generateSemiOriginalCharacter(input: string){
        const model = await readFileSync("./inputModels/semiOriginal.txt", 'utf-8');
        var response = "";
        const request = model + "\n" + input;
        // Sending the request to openai
        response = await this.sendGPTRequest(request);
        return response;
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