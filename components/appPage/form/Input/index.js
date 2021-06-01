export default function Input({
	type,
	id,
	name,
	value,
	setValue,
	placeholder,
	required,
}) {
	return (
		<>
			<input
				type={type ?? 'text'}
				id={id}
				name={name}
				value={value}
				onChange={({ target }) => setValue(target.value)}
				placeholder={placeholder}
				required={required}
			/>
			<style jsx>{`
				input {
					width: 100%;
					background-color: var(--input-background-color);
					border: 0.2rem solid var(--input-border-color);
					border-radius: var(--border-radius);
					padding: 1rem;
				}
				input:focus {
					box-shadow: var(--input-focus-color);
				}
			`}</style>
		</>
	);
}
