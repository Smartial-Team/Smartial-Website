import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Post from '../../../backend/AthleteProfileService';
import Select from './Select';
import Option from './Option';
import formInputs from './formInputs';
import Input from './Input';
import Label from './Label';
import SubmitButton from './SubmitButton';
import Popup from '../../shared/Popup';

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

	// submit form error handling
	const [error, setError] = useState(false);
	const [success, setSuccess] = useState(false);

	const router = useRouter();

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

	function sortUFs(array) {
		return array.sort((a, b) => (a.sigla > b.sigla ? 1 : -1));
	}

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

	async function handleFormSubmit(e) {
		e.preventDefault();

		const post = await Post(router.query.google_user_id, {
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

		if (!post) {
			setError(true);
			return;
		}

		setSuccess(true);
	}

	return (
		<>
			<form onSubmit={handleFormSubmit}>
				<legend>Complete seu cadastro</legend>
				<div className="grid">
					{formInputs.map(({ label, type, id, name, choices }) => {
						if (id === 'state') {
							return (
								<div className={`input-field `} key={id}>
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
								<div className={`input-field `} key={id}>
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
								<div className={`input-field `} key={id}>
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
								<div className={`input-field `} key={id}>
									<Label text={label} htmlFor={id} />
									<Select
										name={name}
										id={id}
										value={style}
										setValue={setStyle}
									>
										<Option
											text="Selecione um estilo"
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
							<div className={`input-field `} key={id}>
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
				</div>
				<div className="submit-button">
					<SubmitButton />
				</div>
				{error && <Popup type="error" setValue={setError} />}
				{success && <Popup type="success" setValue={setSuccess} />}
			</form>
			<style jsx>{`
				form {
					width: min(100%, 50rem);
					margin: 0 auto;
				}
				.grid {
					display: grid;
					grid-template: min-content / repeat(
							auto-fit,
							minmax(19rem, 1fr)
						);
					grid-auto-rows: min-content;
					gap: 1rem;
					justify-content: center;
					align-items: center;
					row-gap: 1rem;
					margin: 1rem 0;
				}
				legend {
					grid-column: 1 / 2;
					font-size: clamp(2rem, 3vw, 3rem);
					font-weight: bolder;
				}
				.input-field {
					width: 100%;
				}
				.submit-button {
					display: flex;
					justify-content: center;
				}
			`}</style>
		</>
	);
}
