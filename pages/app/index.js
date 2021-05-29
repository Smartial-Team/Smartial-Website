import { Get } from '../../backend/BasicProfileService';

import { useRouter } from 'next/router';
import Form from '../../components/appPage/form';

// router.query.google_user_id

export default function App() {
	const router = useRouter();

	return <Form />;
}

// export async getServerSideProps(ctx) {
// 	const authenticated = await Get(ctx.query.google_user_id);

// 	if (!authenticated) {
// 		ctx.res.writeHead(302, { Location: '/login' }).end();
// 		return {};
// 	}
// 	return {};
// };
