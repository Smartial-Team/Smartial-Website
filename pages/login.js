import { useState, useEffect } from 'react';
import { usePubNub } from 'pubnub-react';
import QRCode from 'qrcode.react';
import publicIp from 'public-ip';
import { useRouter } from 'next/router';

export default function Login() {
	const [qrCodeData, setQrCodeData] = useState(null);

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

	function pubNubChannel(channelName) {
		pubnub.addListener({ message: handleMessage });
		pubnub.subscribe({ channels: [new String(channelName)] });
		setQrCodeData(channelName);
	}

	useEffect(async () => {
		try {
			const ip = await publicIp.v6({
				fallbackUrls: ['http://api6.ipify.org/?format=json'],
			});

			pubNubChannel(ip);
		} catch (error) {
			const userUuid = pubnub.getUUID();

			pubNubChannel(userUuid);
		}
	}, []);

	return (
		<>
			<div className="viewport">
				{qrCodeData && <QRCode value={qrCodeData} renderAs="svg" />}
			</div>
			<style jsx>{`
				.viewport {
					height: 100%;
					display: flex;
					align-items: center;
					justify-content: center;
				}
			`}</style>
		</>
	);
}
