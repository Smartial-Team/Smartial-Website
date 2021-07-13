import { create } from "apisauce";

//types
import { ApiResponse } from "apisauce";

const API = create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? `http://${process.env.NEXT_PUBLIC_YOUR_IP}:5002`
      : "https://teamservice-dot-smartial-315517.rj.r.appspot.com/",
});

export default async function postAthlete(endpoint: string, body: {}) {
  const response: ApiResponse<object, null> = await API.post("/" + endpoint, body);

  return response;
}
