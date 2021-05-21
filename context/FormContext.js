import { createContext, useState } from "react";

export const FormContext = createContext();

export default function EmailContextProvider({ children }) {
    const [formValues, setFormValues] = useState({});

    function Submit(){
        console.log(formValues); 
    }

    return <FormContext.Provider value={{ formValues, setFormValues, Submit }}>
                {children}
            </FormContext.Provider>
}
