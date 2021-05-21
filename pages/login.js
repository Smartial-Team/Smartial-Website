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
import firebaseConfig from '../common/FirebaseConfig';

// if(!firebase.apps.length){
//     firebase.initializeApp();
// }
  
export default function Login(){
    const [QR, setQR] = useState(null);
    const pubnub = usePubNub();
    const { userIp, setUserIp } = useContext(IpContext);

    function handleMessage(event){
        alert(event.message);
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