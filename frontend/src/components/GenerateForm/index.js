import { useState, FormEvent } from 'react';
import { api } from '../../services/api';

import lamp from '../../assets/logo.png';
import "./styles.css";

export function GenerateForm()
{
	const [parameter, setParameter] = useState('');

	async function handleGenerate(FormEvent) {
    FormEvent.preventDefault();

    if (!parameter.trim()) {
      return;
    }

    //CALL API POST

    setParameter('');
  }

	return(
		<div className="generateFormWrapper">

			<header className="topInformation">
        <div className="lampImage">
          <img src={lamp} className="lampLogo" />
        </div>
      </header>

      <form onSubmit={handleGenerate} className="generateTextForm">
        <label htmlFor="message">Text generator</label>

        <textarea
          name="message"
          id="message"
          placeholder="Type a parameter."
          onChange={event => setParameter(event.target.value)}
          value={parameter}
        />

        <button className="button" type="submit">Generate</button>
      </form>

		</div>
	)
}