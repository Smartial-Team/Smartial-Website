import { useEffect, useState } from 'react';
import Post from '../../../backend/AthleteProfileService';
import Select from './Select';
import Option from './Option';
import formInputs from './formInputs';
import Input from './Input';
import Label from './Label';
import SubmitButton from './SubmitButton';

export default function Form() {
	// user input data
	const [name, setName] = useState('');
	const [age, setAge] = useState('');
	const [state, setState] = useState('');
	const [city, setCity] = useState('');
	const [height, setHeight] = useState('');
	const [weight, setWeight] = useState('');
	const [wingspan, setWingspan] = useState('');
	const [category, setCategory] = useState('');
	const [victories, setVictories] = useState('');
	const [defeats, setDefeats] = useState('');
	const [knockouts, setKnockouts] = useState('');
	const [style, setStyle] = useState('');

	// IBGE UFs and Cities
	const [states, setStates] = useState([]);
	const [cities, setCities] = useState([]);

	const mapInputToState = {
		name: { value: name, setValue: setName },
		age: { value: age, setValue: setAge },
		state: { value: state, setValue: setState },
		city: { value: city, setValue: setCity },
		height: { value: height, setValue: setHeight },
		weight: { value: weight, setValue: setWeight },
		wingspan: { value: wingspan, setValue: setWingspan },
		category: { value: category, setValue: setCategory },
		victories: { value: victories, setValue: setVictories },
		defeats: { value: defeats, setValue: setDefeats },
		knockouts: { value: knockouts, setValue: setKnockouts },
		style: { value: style, setValue: setStyle },
	};

	useEffect(async () => {
		const UFsUrl = `https://servicodados.ibge.gov.br/api/v1/localidades/estados`;
		const getUFs = await (await fetch(UFsUrl)).json();
		const sortedUFs = sortUFs(getUFs);
		setStates(sortedUFs);
	}, []);

	useEffect(async () => {
		const CitiesUrl = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${state}/municipios`;
		const getCities = await (await fetch(CitiesUrl)).json();
		setCities(getCities);
	}, [state]);

	function sortUFs(array) {
		return array.sort((a, b) => (a.sigla > b.sigla ? 1 : -1));
	}

	async function handleFormSubmit(e) {
		e.preventDefault();

		const post = await Post('ID_DO_USUARIO', {
			name,
			age,
			state,
			city,
			height,
			weight,
			wingspan,
			category,
			victories,
			knockouts,
			defeats,
			style,
		});

		alert(post);
	}

	return (
		<>
			<form onSubmit={handleFormSubmit}>
				<fieldset>
					<legend>Complete seu cadastro</legend>
					{formInputs.map(({ label, type, id, name, choices }) => {
						if (id === 'state') {
							return (
								<div className={`input-field ${id}`} key={id}>
									<Label text={label} htmlFor={id} />
									<Select
										name={name}
										id={id}
										value={state}
										setValue={setState}
										required
									>
										<Option
											text="Selecione seu estado"
											value=""
											hidden
										/>
										{states.map(({ id, sigla }) => (
											<Option
												text={sigla}
												value={sigla}
												key={id}
											/>
										))}
									</Select>
								</div>
							);
						}

						if (id === 'city') {
							return (
								<div className={`input-field ${id}`} key={id}>
									<Label text={label} htmlFor={id} />
									<Select
										name={name}
										id={id}
										value={city}
										setValue={setCity}
									>
										<Option
											text="Selecione sua cidade"
											value=""
											hidden
										/>
										{cities.map(({ id, nome }) => (
											<Option
												text={nome}
												value={nome}
												key={id}
											/>
										))}
									</Select>
								</div>
							);
						}

						if (id === 'category') {
							return (
								<div className={`input-field ${id}`} key={id}>
									<Label text={label} htmlFor={id} />
									<Select
										name={name}
										id={id}
										value={category}
										setValue={setCategory}
									>
										<Option
											text="Selecione uma categoria"
											value=""
											hidden
										/>
										{choices.map((choice) => (
											<Option
												text={choice}
												value={choice}
												key={choice}
											/>
										))}
									</Select>
								</div>
							);
						}

						if (id === 'style') {
							return (
								<div className={`input-field ${type}`} key={id}>
									<Label text={label} htmlFor={id} />
									<Select
										name={name}
										id={id}
										value={style}
										setValue={setStyle}
									>
										<Option
											text="Selecione um estilo de luta"
											value=""
											hidden
										/>
										{choices.map((choice) => (
											<Option
												text={choice}
												value={choice}
												key={choice}
											/>
										))}
									</Select>
								</div>
							);
						}

						return (
							<div className={`input-field ${name}`} key={id}>
								<Label text={label} htmlFor={id} />
								<Input
									type={type}
									id={id}
									name={name}
									value={mapInputToState[id].value}
									setValue={mapInputToState[id].setValue}
									required
								/>
							</div>
						);
					})}
					<div className="submit-button">
						<SubmitButton />
					</div>
				</fieldset>
			</form>
			<style jsx>{``}</style>
		</>
	);
}
