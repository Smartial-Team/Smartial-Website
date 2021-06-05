import { create } from 'apisauce';

const API = create({
	baseURL: `http://${process.env.YOUR_IP}:5003`,
});

export default async function Post(google_user_id, body) {
	const apiResponse = await API.post('/' + google_user_id, body);
	return apiResponse.ok;
}
