import { createContext, useState } from "react";

export const IpContext = createContext();

export default function EmailContextProvider({ children }) {
    const [userIp, setUserIp] = useState(null);

    return <IpContext.Provider value={{ userIp, setUserIp  }}>
                {children}
            </IpContext.Provider>
}
