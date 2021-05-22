import { create } from 'apisauce';

const API = create({
    baseURL : 'http://192.168.1.106:5003'
})

export async function Post(google_user_id, body){
    const apiResponse = await API.post('/' + google_user_id, body);
    return apiResponse.ok;
}