export default function Select({ setValue, name, id, required, children }) {
	return (
		<>
			<select
				name={name}
				id={id}
				onChange={({ target }) => setValue(target.value)}
				required={required}
			>
				{children}
			</select>
			<style jsx>{`
				select {
					width: 100%;
					padding: 1rem;
					background-color: var(--input-background-color);
					border: 0.2rem solid var(--input-border-color);
					border-radius: var(--border-radius);
				}
				select:focus {
					box-shadow: var(--input-focus-color);
				}
			`}</style>
		</>
	);
}
