import firebaseConfig from '../../../common/FirebaseConfig';
import firebase from "firebase/app";
import "firebase/firestore";
console.log(firebaseConfig);
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();

export default function FirebaseDocument(request, response){
    db.collection('pubnub_open_channels').doc(request.query.id).get()
        .then(snapshot => {
            response.json(snapshot.data());
        });
}