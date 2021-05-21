import '../styles/master.css'
import PubNub from 'pubnub';
import { PubNubProvider } from 'pubnub-react';
import IpContext from '../context/IpContext';

const pubNubConfig = new PubNub({
    publishKey: process.env.NEXT_PUBLIC_PUBLISH_KEY,
    subscribeKey: process.env.NEXT_PUBLIC_SUBSCRIBE_KEY
});

export default function Home({ Component, pageProps }) {
  return <IpContext>
           <PubNubProvider client={pubNubConfig}>
            <Component {...pageProps} />               
          </PubNubProvider>
        </IpContext>
}