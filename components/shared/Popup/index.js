import { Error, Success } from '../../shared/icons';

export default function Popup({ type, setValue }) {
	if (type === 'error') {
		return (
			<>
				<div className="container" onClick={() => setValue(false)}>
					<div className="popup" onClick={(e) => e.stopPropagation()}>
						<div className="icon">
							<Error />
						</div>
						<div className="message">
							<p>Houve um erro ao salvar seus dados.</p>
						</div>
					</div>
				</div>
				<style jsx>{`
					.container {
						width: 100vw;
						height: 100vh;
						padding: 2rem;
						background-color: rgba(0, 0, 0, 0.5);
						position: fixed;
						top: 0;
						left: 0;
						display: flex;
						justify-content: center;
						align-items: center;
					}
					.popup {
						height: min-content;
						padding: 2rem;
						display: flex;
						flex-direction: column;
						row-gap: 2rem;
						justify-content: center;
						align-items: center;
						border-radius: var(--border-radius);
						background-color: #17141e;
						box-shadow: 0 0.2rem 0 0.1rem rgba(0, 0, 0, 0.2);
					}
					.icon {
						display: flex;
						width: 5rem;
						height: 5rem;
					}
					.message p {
						text-align: center;
						font-size: clamp(1.4rem, 2vw, 2rem);
					}
				`}</style>
			</>
		);
	} else if (type === 'success') {
		return (
			<>
				<div className="container" onClick={() => setValue(false)}>
					<div className="popup" onClick={(e) => e.stopPropagation()}>
						<div className="icon">
							<Success />
						</div>
						<div className="message">
							<p>Dados salvos com sucesso.</p>
						</div>
					</div>
				</div>
				<style jsx>{`
					.container {
						width: 100vw;
						height: 100vh;
						background-color: rgba(0, 0, 0, 0.5);
						position: fixed;
						top: 0;
						left: 0;
						display: flex;
						justify-content: center;
						align-items: center;
					}
					.popup {
						width: 30rem;
						height: min-content;
						padding: 2rem;
						display: flex;
						flex-direction: column;
						row-gap: 2rem;
						justify-content: center;
						align-items: center;
						border-radius: var(--border-radius);
						background-color: #17141e;
						box-shadow: 0 0.2rem 0 0.1rem rgba(0, 0, 0, 0.2);
					}
					.icon {
						display: flex;
						width: 5rem;
						height: 5rem;
					}
					.message p {
						text-align: center;
						font-size: clamp(1.4rem, 2vw, 2rem);
					}
				`}</style>
			</>
		);
	}
}
