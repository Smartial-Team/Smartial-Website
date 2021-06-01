export default function Label({ text, htmlFor }) {
	return (
		<>
			<label htmlFor={htmlFor}>{text}</label>
			<style jsx>{`
				label {
					display: block;
					font-size: clamp(1.4rem, 2vw, 2rem);
					margin-bottom: 0.3rem;
				}
			`}</style>
		</>
	);
}
