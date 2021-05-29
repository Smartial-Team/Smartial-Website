export default function Label({ text, htmlFor }) {
	return (
		<>
			<label htmlFor={htmlFor}>{text}</label>
			<style jsx>{`
				label {
					display: block;
				}
			`}</style>
		</>
	);
}
