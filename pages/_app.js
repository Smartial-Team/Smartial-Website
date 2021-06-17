import PubNub from 'pubnub';
import { PubNubProvider } from 'pubnub-react';
import GlobalStyles from '../components/globalStyles';

const uuid = PubNub.generateUUID();

const pubNubConfig = new PubNub({
	publishKey: process.env.NEXT_PUBLIC_PUBLISH_KEY,
	subscribeKey: process.env.NEXT_PUBLIC_SUBSCRIBE_KEY,
	uuid,
});

export default function Home({ Component, pageProps }) {
	return (
		<PubNubProvider client={pubNubConfig}>
			<GlobalStyles>
				<Component {...pageProps} />
			</GlobalStyles>
		</PubNubProvider>
	);
}
