import { useContext } from 'react';
import { IpContext } from '../context/IpContext';

export default function Firestore({runMutation, QR, setQR}){
    const { userIp } = useContext(IpContext);

    async function asyncRunMutation(){
        const { key } = await runMutation({ userIp });
        setQR(key);
    }

    if(userIp && !QR){
        asyncRunMutation();
    }

    return <div/>;
}