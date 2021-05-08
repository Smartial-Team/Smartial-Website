import { render } from "react-nil";

function Firestore({runMutation, pubNubChannel, QR, setQR}){

    async function asyncRunMutation(){
        const { key } = await runMutation({ pubNubChannel });
        setQR(key);
    }

    if(pubNubChannel && !QR){
        asyncRunMutation();
    }
    return null;
}

export default render(<Firestore/>);