import { useState, FormEvent } from 'react';
import { GiOpenChest } from "react-icons/gi";
import Slider from '@mui/material/Slider';
import { makeStyles } from '@mui/styles';
import React, { useContext } from 'react';

import "./styles.css";
import axios from 'axios';
import OriginalCharacterDataType from '../../OriginalCharacterDataType';

import SliderPropertyDefinition, { ValueType } from './sliderPropertyDefinition';

import { Context } from '../../Context/AuthContext';

const useStyles = makeStyles({
  sliderColor: {
    color: '#23BF57'
  }
});

function ResetParams(params: SliderPropertyDefinition[]) {
  params.forEach(param => {
    param.value = param.minValue;
  });
}




export function GenerateForm() {
  const { handleLogin, value, setValue, personagem, setPersonagem, buttonPopup, setButtonPopup} = useContext(Context); 

  const classes = useStyles();

  const [params, setParameters]: [SliderPropertyDefinition[], any] = useState([
    {
      minValue: 0.1,
      maxValue: 1,
      stepValue: 0.1,
      name: "Temperature",
      type: ValueType.Temperature,
      value: 0.7
    },
    {
      minValue: 0.1,
      maxValue: 1,
      stepValue: 0.1,
      name: "Freq penalty",
      type: ValueType.FrequencyPenalty,
      value: 0.3
    },
    {
      minValue: 200,
      maxValue: 500,
      stepValue: 10,
      name: "Max Tokens",
      type: ValueType.MaxToken,
      value: 300
    },
  ]);

  async function handleGenerate(FormEvent: { preventDefault: () => void; }) {
    FormEvent.preventDefault();

    var data = new OriginalCharacterDataType();

    params.forEach((param) => {
      switch (param.type) {
        case ValueType.Temperature:
          data.temp = param.value;
          break;
        case ValueType.FrequencyPenalty:
          data.freqPenalty = param.value;
          break;
        case ValueType.MaxToken:
          data.maxTokens = param.value;
          break;
        default:
          console.error(`Parameter ${param.name} not found`);
          return;
      }
    });

    //CALL API POST
    axios({
      method: "GET",
      url: "https://gpt3criatividade.herokuapp.com/originalCharacter",
      params: data
    }).then(res => {
      console.log("ANSWER");
      console.log(res.data);

      //setValue(res.data)
	    setPersonagem([...personagem, res.data]);
      handleLogin();
    }).catch(err => console.log(err))
    console.log("parameters values: ");
    params.forEach(param => console.log(param.name + ": " + param.value));
  }

  const loadSliders = () => {
    const sliders: JSX.Element[] = [];

    params.forEach((parameter, index) => {
      sliders.push(
        <>
          <div className="parameterName">{parameter.name}</div>
          <Slider
            className={classes.sliderColor}
            key={index}
            size="small"
            value={parameter.value}
            min={parameter.minValue}
            max={parameter.maxValue}
            step={parameter.stepValue}
            valueLabelDisplay="auto"
            onChange={(event, newValue) => {
              parameter.value = newValue as number;
              const newRatings = [...params];
              setParameters(newRatings);
            }}
          />
        </>

      )
    });
    return sliders;
  }

  return (
    <div className="generateFormWrapper">

      <header className="topInformation">
        <div className="lampImage">
          <GiOpenChest className="lampLogo" />
        </div>
      </header>

      <form onSubmit={handleGenerate} className="generateTextForm">
        <label htmlFor="message">Text generator</label>

        <div className="wrapperParameter" >
          {loadSliders()}
        </div>

        <button className="button" type="submit">Generate</button>
      </form>

    </div>
  )
}