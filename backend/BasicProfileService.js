import { create } from 'apisauce';

const API = create({
	baseURL: `http://${process.env.YOUR_IP}:5001`,
});

export async function Get(google_user_id) {
	const apiResponse = await API.get('/' + google_user_id);
	return apiResponse.ok;
}
