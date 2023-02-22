import { getValue } from "firebase/remote-config";
import { createContext, ReactNode, useEffect, useState } from "react";
import { fetchRemoteConfig, remoteConfig } from "../services/firebase";

type PropsChildren = {
  children: ReactNode;
};

type FeatureToggleContextProps = {
  setFeature: React.Dispatch<React.SetStateAction<any>>;
  isEnable: boolean;
}


export const FeatureToggleContext = createContext({} as FeatureToggleContextProps);

export const FeatureToggleProvider = ({ children }: PropsChildren) => {
  const [feature, setFeature] = useState("");
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    fetchRemoteConfig().then(() => setLoading(false));
  }, []);

  const isEnable = getValue(remoteConfig, feature).asBoolean()

  if (loading) {
    return <div className="text-white">Loading...</div>;
  }


  return (
    <FeatureToggleContext.Provider  value={{ isEnable, setFeature }}>
      {children}
    </FeatureToggleContext.Provider>
  );
}