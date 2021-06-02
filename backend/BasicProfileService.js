import { create } from 'apisauce';

const API = create({
	baseURL: 'http://localhost:5003',
});

export async function Get(google_user_id) {
	const apiResponse = await API.get('/' + google_user_id);
	return apiResponse.ok;
}
