import { FirebaseApp, FirebaseOptions, initializeApp } from 'firebase/app';
import { RemoteConfig, fetchAndActivate, getRemoteConfig } from 'firebase/remote-config';

const firebaseConfig: FirebaseOptions = {
  // firebase credentials
  // apiKey: "",
  // authDomain: "",
  // projectId: "",
  // storageBucket: "",
  // messagingSenderId: "",
  // appId: ""
};

export const app: FirebaseApp = initializeApp(firebaseConfig);
export const remoteConfig: RemoteConfig = getRemoteConfig(app);
remoteConfig.settings = {
  fetchTimeoutMillis: 60000,
  minimumFetchIntervalMillis: 1
}

remoteConfig.defaultConfig = ({
 'app_super_awesome_feature': false
})

export const fetchRemoteConfig = async (): Promise<void> => {
  await fetchAndActivate(remoteConfig);
};


