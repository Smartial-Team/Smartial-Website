export default function Option({ text, value, hidden }) {
	return (
		<>
			<option value={value} hidden={hidden}>
				{text}
			</option>
			<style jsx>{`
			`}</style>
		</>
	);
}
