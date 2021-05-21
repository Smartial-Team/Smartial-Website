import { Get } from '../backend/BasicProfileService';

import FormItems from './FormItems';

import Number from '../../components/Number';
import Select from '../../components/Select';

import { useContext } from 'react';
import { FormContext } from '../context/FormContext';

function App(){
    const { Submit } = useContext(FormContext);

    return <div>
                {
                    FormItems.map(item => {
                       if(item.type === "float"){
                           return <Number item={item}/>
                       }else{
                           return <Select item={item}/>
                       }
                    })
                }
                <button onClick={_ => Submit()}>ENVIAR</button>
            </div>
}

App.getInitialProps = async ctx => {
    const authenticated = await Get(ctx.query.google_user_id);

    if(!authenticated){
        ctx.res.writeHead(302, { Location: "/login" }).end()
        return {}
    }
    return {}
}

export default App;