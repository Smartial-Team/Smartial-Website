import { useContext } from 'react';
import { FormContext } from '../context/FormContext';

export default function Select({item}){
    const { formValues, setFormValues } = useContext(FormContext);

    function onChange(e){
        let obj = {...formValues}
        obj[item.fieldName] = e.target.value;
        setFormValues(obj);
    }

    return <select onChange={onChange}>
                {
                    item.choices.map(choice => {
                        return <option>{choice}</option>
                    })
                }
            </select> 
}