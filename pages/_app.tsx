import PubNub from "pubnub";
import { PubNubProvider } from "pubnub-react";
import GlobalStyles from "../components/globalStyles";

// types
import { AppProps } from "next/app";
import {} from "pubnub";

const uuid = PubNub.generateUUID();

const pubNubConfig = new PubNub({
  publishKey: process.env.NEXT_PUBLIC_PUBLISH_KEY,
  subscribeKey: process.env.NEXT_PUBLIC_SUBSCRIBE_KEY as string,
  uuid,
});

export default function Home({ Component, pageProps }: AppProps) {
  return (
    <PubNubProvider client={pubNubConfig}>
      <GlobalStyles>
        <Component {...pageProps} />
      </GlobalStyles>
    </PubNubProvider>
  );
}
