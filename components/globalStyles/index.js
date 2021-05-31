export default function GlobalStyles({ children }) {
	return (
		<>
			{children}
			<style jsx global>{`
				* {
					margin: 0;
					padding: 0;
					border: 0;
					outline: 0;
					box-sizing: border-box;
				}
				:root {
					font-size: 62.5%;

					--body-background-color: #25314c;

					--input-background-color: #17141e;
					--input-border-color: #14171e;
					--input-focus-color: #7dfafe66 0 0 0 0.2rem;

					--text-color: #f2f2f2;

					--border-radius: 0.6rem;

					--button-background-color: #14171E;
				}
				h1,
				h2,
				p,
				a,
				input,
				placeholder,
				option,
				legend,
				label,
				select,
				button {
					font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI',
						Helvetica, 'Apple Color Emoji', Arial, sans-serif,
						'Segoe UI Emoji', 'Segoe UI Symbol';
					color: var(--text-color);
				}
				body {
					background-color: var(--body-background-color);
				}
			`}</style>
		</>
	);
}
