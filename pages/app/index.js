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

// export async function getServerSideProps(ctx) {
// 	const authenticated = await Get(ctx.query.google_user_id);

// 	if (!authenticated) {
// 		ctx.res.writeHead(302, { Location: '/login' }).end();
// 		return {};
// 	}
// 	return {};
// }
