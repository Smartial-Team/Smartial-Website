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
			<style jsx>{``}</style>
		</>
	);
}
