import { Get } from '../../backend/BasicProfileService';
import Form from '../../components/appPage/form';

export default function App() {
	return (
		<>
			<div className="container">
				<Form />
			</div>
			<style jsx>{`
				.container {
					width: 100%;
					padding: 2rem;
				}
			`}</style>
		</>
	);
}

export async function getServerSideProps(ctx) {
	const authenticated = await Get(ctx.query.google_user_id);

	if (!authenticated) {
		return {
			redirect: { destination: '/login', permanent: true },
		};
	}
	return { props: {} };
}