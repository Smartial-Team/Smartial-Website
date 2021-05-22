import { useContext } from 'react';
import { FormContext } from '../context/FormContext';

export default function Number({item}){
    const { formValues, setFormValues } = useContext(FormContext);

    function onChange(e){
        let obj = {...formValues}
        obj[item.fieldName] = e.target.value;
        setFormValues(obj);
    }

    if(item.type === "float"){
        return <input type="number" step="1" placeholder={item.label} onChange={e => onChange(e)} className="formItem"/>
    }else{
        return <input type="number" placeholder={item.label} onChange={e => onChange(e)} className="formItem"/>
    }
}