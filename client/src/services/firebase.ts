import { FirebaseApp, FirebaseOptions, initializeApp } from 'firebase/app';
import { RemoteConfig, fetchAndActivate, getRemoteConfig } from 'firebase/remote-config';

const firebaseConfig: FirebaseOptions = {
  apiKey: "AIzaSyBHPN4X697lIpz1D79e4uv5XshlGQM1a8w",
  authDomain: "feature-toggle-eb171.firebaseapp.com",
  projectId: "feature-toggle-eb171",
  storageBucket: "feature-toggle-eb171.appspot.com",
  messagingSenderId: "98136843641",
  appId: "1:98136843641:web:6ea201a757098eb86efba8"
};

export const app: FirebaseApp = initializeApp(firebaseConfig);
export const remoteConfig: RemoteConfig = getRemoteConfig(app);
remoteConfig.settings = {
  fetchTimeoutMillis: 60000,
  minimumFetchIntervalMillis: 3600000
}

export const fetchRemoteConfig = async (): Promise<void> => {
  await fetchAndActivate(remoteConfig);
};


