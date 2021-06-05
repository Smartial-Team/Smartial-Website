import { create } from 'apisauce';

const API = create({
	baseURL: (process.env.NODE_ENV === 'development') ? `http://${process.env.YOUR_IP}:5003` : "https://athleteprofileservice-dot-secure-sensor-281602.rj.r.appspot.com",
});

export default async function Post(google_user_id, body) {
	const apiResponse = await API.post('/' + google_user_id, body);
	return apiResponse.ok;
}