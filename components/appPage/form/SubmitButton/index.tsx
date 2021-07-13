type Props = {
	css?: {} 
}

export default function SubmitButton({ css }: Props) {
	return (
		<>
			<button type="submit">Enviar</button>
			<style jsx>{`
				button {
					width: 19rem;
					border-radius: var(--border-radius);
					padding: 1rem;
					font-weight: bold;
					text-transform: uppercase;
					background-color: var(--button-background-color);
					${css}
				}
				button:focus {
					box-shadow: var(--input-focus-color);
				}
				button:hover {
					cursor: pointer;
				}
			`}</style>
		</>
	);
}
