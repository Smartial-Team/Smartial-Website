import { Get } from '../../backend/BasicProfileService';

import FormItems from './FormItems';

import Number from '../../components/Number';
import Select from '../../components/Select';
import TextInput from '../../components/TextInput';

import { useContext } from 'react';
import { FormContext } from '../../context/FormContext';

import { useRouter } from 'next/router'

function App(){
    const { Submit } = useContext(FormContext);
    const router = useRouter();

    return <div className="viewport">
                <div className="formContainer">
                    {
                        FormItems.map(item => {
                        if(item.type === "float" || item.type === "int"){
                            return <Number item={item}/>
                        }else if(item.type === "text"){
                            return <TextInput item={item}/>
                        }else{
                            return <Select item={item}/>
                        }
                        })
                    }
                    <button onClick={_ => Submit(router.query.google_user_id)}>ENVIAR</button>
                </div>
            </div>
}

App.getServerSideProps = async ctx => {
    const authenticated = await Get(ctx.query.google_user_id);

    if(!authenticated){
        ctx.res.writeHead(302, { Location: "/login" }).end()
        return {}
    }
    return {}
}

export default App;