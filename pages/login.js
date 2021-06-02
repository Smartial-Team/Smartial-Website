import { useState, useEffect } from 'react';
import { usePubNub } from 'pubnub-react';
import QRCode from 'qrcode.react';
import publicIp from 'public-ip';
import { useRouter } from 'next/router';

export default function Login() {
	const [userIp, setUserIp] = useState(null);

	const pubnub = usePubNub();
	const router = useRouter();

	function handleMessage(event) {
		router.push({
			pathname: '/app',
			query: {
				google_user_id: event.message.user_id,
			},
		});
	}

	useEffect(async () => {
		const ip = await publicIp.v6({
			fallbackUrls: ['https://ifconfig.co/ip'],
		});
		pubnub.addListener({ message: handleMessage });
		pubnub.subscribe({ channels: [new String(ip)] });
		setUserIp(ip);
	}, []);

	return (
		<div className="viewport">
			{userIp && <QRCode value={userIp} renderAs="svg" />}
		</div>
	);
}
