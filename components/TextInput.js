import { useContext } from 'react';
import { FormContext } from '../context/FormContext';

export default function TextInput({item}){
    const { formValues, setFormValues } = useContext(FormContext);

    function onChange(e){
        let obj = {...formValues}
        obj[item.fieldName] = e.target.value;
        setFormValues(obj);
    }

    return <input type="text" placeholder={item.label} onChange={e => onChange(e)} className="formItem"/>
}