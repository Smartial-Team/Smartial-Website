import '../styles/master.css'
import PubNub from 'pubnub';
import { PubNubProvider } from 'pubnub-react';
import IpContextProvider from '../context/IpContext';
import FormContextProvider from '../context/FormContext';

const pubNubConfig = new PubNub({
    publishKey: process.env.NEXT_PUBLIC_PUBLISH_KEY,
    subscribeKey: process.env.NEXT_PUBLIC_SUBSCRIBE_KEY
});

export default function Home({ Component, pageProps }) {
  return <IpContextProvider>
           <FormContextProvider>
              <PubNubProvider client={pubNubConfig}>
                <Component {...pageProps} />               
              </PubNubProvider>
           </FormContextProvider>
        </IpContextProvider>
}