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
				}
			`}</style>
		</>
	);
}
