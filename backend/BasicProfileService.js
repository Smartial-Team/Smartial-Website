import { create } from 'apisauce';

const API = create({
	baseURL: (process.env.NODE_ENV === 'development') ? `http://${process.env.YOUR_IP}:5001` : "https://basicprofileservice-dot-secure-sensor-281602.rj.r.appspot.com",
});

export async function Get(google_user_id) {
	const apiResponse = await API.get('/' + google_user_id);
	return apiResponse.ok;
}
