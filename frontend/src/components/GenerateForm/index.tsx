import { useState, FormEvent } from 'react';
import { GiOpenChest } from "react-icons/gi";
import Slider from '@mui/material/Slider';
import { makeStyles } from '@mui/styles';

import "./styles.css";
import axios from 'axios';
import OriginalCharacterDataType from '../../OriginalCharacterDataType';

const useStyles = makeStyles({
  sliderColor: {
    color: '#23BF57'
  }
});

var parameterName = ["Temperature", "Freq penalty", "Max tokens"];

export function GenerateForm()
{
  const classes = useStyles();

	const [parameters, setParameters] = useState([0, 0, 0]);

	async function handleGenerate(FormEvent: { preventDefault: () => void; }) {
    FormEvent.preventDefault();


    var data = new OriginalCharacterDataType();
    
    parameterName.forEach((name, index) => {
      switch(name) {
        case "Temperature":
          data.temp = parameters[index];
          break;
        case "Freq penalty":
          data.freqPenalty = parameters[index];
          break;
        case "Max tokens":
          data.maxTokens = parameters[index];
          break;
        default:
          console.error(`Parameter ${name} not found`);
          return;
      }
    });

    //CALL API POST
    axios({
      method: "GET",
      url: "http://localhost:8080/originalCharacter",
      params: data
    }).then(res => {
      console.log("ANSWER");
      console.log(res.data);
    }).catch(err => console.log(err))
    console.log("parameters values: ", parameters)

    setParameters([0,0,0]);
  }

  const loadSliders = () => {
    const sliders: JSX.Element[] = [];
    var minValue=0;
    var maxValue=1;
    var stepValue=0.01;

    parameters.forEach((parameter, index) => {
      if(index === (parameters.length - 1))
      {
        minValue=0;
        maxValue=100;
        stepValue=1;
      }

      sliders.push(
        <>
          <div className="parameterName">{parameterName[index]}</div>
          <Slider
            className={classes.sliderColor}
            key={index}
            size="small"
            value={parameters[index]}
            min={minValue}
            max={maxValue}
            step={stepValue}
            valueLabelDisplay="auto"
            onChange={(event, newValue) => {
              parameters[index] = newValue as number;
              const newRatings = [...parameters];
              setParameters(newRatings);
            }}
          />
          </>

        )
      });
      return sliders;
    }

    return(
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