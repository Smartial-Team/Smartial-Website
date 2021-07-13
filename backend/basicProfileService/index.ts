import { create } from "apisauce";

//types
import { ApiResponse } from "apisauce";
import { TrainerProfile } from "../../types";

const API = create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? `http://${process.env.YOUR_IP}:5001`
      : "https://smartial-315517.rj.r.appspot.com/",
});

export default async function getTrainer(endpoint: string) {
  const apiResponse: ApiResponse<TrainerProfile, null> = await API.get("/" + endpoint);

  return apiResponse;
}
