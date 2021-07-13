import { useState, useEffect } from "react";
import { usePubNub } from "pubnub-react";
import QRCode from "qrcode.react";
import publicIp from "public-ip";
import { useRouter } from "next/router";

// types
import { MessageEvent } from "pubnub";

export default function Login() {
  const [qrCodeData, setQrCodeData] = useState("");

  const pubnub = usePubNub();
  const router = useRouter();

  function handleMessage(event: MessageEvent) {
    router.push({
      pathname: "/app",
      query: {
        google_user_id: event.message.user_id,
      },
    });
  }

  function pubNubChannel(channelName: string) {
    pubnub.addListener({ message: handleMessage });
    pubnub.subscribe({ channels: [channelName] });
    setQrCodeData(channelName);
  }

  useEffect(() => {
    async function getChannelName() {
      try {
        const ip = await publicIp.v6({
          fallbackUrls: ["http://api6.ipify.org/?format=json"],
        });

        pubNubChannel(ip);
      } catch (error) {
        const userUuid = pubnub.getUUID();

        pubNubChannel(userUuid);
      }
    }

    getChannelName();
  }, []);

  return (
    <>
      <div className="viewport">{qrCodeData && <QRCode value={qrCodeData} renderAs="svg" />}</div>
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
