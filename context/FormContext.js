import { createContext, useState } from "react";
import { Post } from '../backend/AthleteProfileService';

export const FormContext = createContext();

export default function EmailContextProvider({ children }) {
    const [formValues, setFormValues] = useState({});

    async function Submit(google_user_id){
        const apiResponse = await Post(google_user_id, formValues);
        alert(apiResponse);
    }

    return <FormContext.Provider value={{ formValues, setFormValues, Submit }}>
                {children}
            </FormContext.Provider>
}
