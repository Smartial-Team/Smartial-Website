import '../styles/master.css'
import PubNub from 'pubnub';
import { PubNubProvider } from 'pubnub-react';
 
const pubNubConfig = new PubNub({
    publishKey: process.env.NEXT_PUBLIC_PUBLISH_KEY,
    subscribeKey: process.env.NEXT_PUBLIC_SUBSCRIBE_KEY,
    secretKey: process.env.NEXT_PUBLIC_SECRET_KEY
});

export default function Home({ Component, pageProps }) {
  return <PubNubProvider client={pubNubConfig}>
            <Component {...pageProps} />               
          </PubNubProvider>
}