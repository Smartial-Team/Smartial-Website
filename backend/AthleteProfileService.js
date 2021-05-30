import { create } from 'apisauce';

const API = create({
	baseURL: 'http://localhost:5001',
});

export default async function Post(google_user_id, body) {
	const apiResponse = await API.post('/' + google_user_id, body);
	return apiResponse.ok;
}
