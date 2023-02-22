import { getValue } from "firebase/remote-config";
import { createContext, ReactNode, useEffect, useState } from "react";
import { fetchRemoteConfig, remoteConfig } from "../services/firebase";

type PropsChildren = {
  children: ReactNode;
};

type FeatureToggleContextProps = {
  isEnable: (featureToggle: string) => boolean;
}


export const FeatureToggleContext = createContext({} as FeatureToggleContextProps);

export const FeatureToggleProvider = ({ children }: PropsChildren) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRemoteConfig().then(() => setLoading(false));
  }, []);

  const isEnable = (featureToggle: string) => {
    const result = getValue(remoteConfig, featureToggle).asBoolean()
    return result;
  }


  if (loading) {
    return <div className="text-white">Loading...</div>;
  }


  return (
    <FeatureToggleContext.Provider  value={{ isEnable }}>
      {children}
    </FeatureToggleContext.Provider>
  );
}