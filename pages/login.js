import { useState, useEffect, useContext } from 'react';
import { usePubNub } from 'pubnub-react';
import QRCode from 'qrcode.react';
import ProgressBar from '../components/ProgressBar';
import publicIp from "public-ip";
import firebase from "firebase/app";
import "firebase/firestore";
import {
    FirestoreProvider,
    FirestoreMutation,
} from "@react-firebase/firestore";
import MutationHandler from '../components/MutationHandler';
import { IpContext } from '../context/IpContext';

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_APP_ID
};

// if(!firebase.apps.length){
//     firebase.initializeApp();
// }
  
export default function Login(){
    const [QR, setQR] = useState(null);
    const pubnub = usePubNub();
    const { userIp, setUserIp } = useContext(IpContext);

    function handleMessage(){

    }

    useEffect(async _ => {
        const ip = await publicIp.v6({
            fallbackUrls: [ "https://ifconfig.co/ip" ]
        });
        pubnub.addListener({ message: handleMessage });
        pubnub.subscribe({ channels : [new String(ip)] });
        setUserIp(ip);
    }, []);

    if(QR){
        return <div className="viewport">
            <QRCode value={QR}/>
        </div>
    }else{
        return <div className="viewport">
                    <FirestoreProvider {...firebaseConfig} firebase={firebase}>
                        <FirestoreMutation path="pubnub_open_channels" type="add">
                            {({ runMutation }) => (
                                <>
                                    <MutationHandler pubNubChannel={userIp}
                                                    runMutation={runMutation}
                                                    QR={QR}
                                                    setQR={setQR}/>
                                    <ProgressBar/>
                                </>
                            )}
                        </FirestoreMutation>
                    </FirestoreProvider> 
        </div>
    }
}