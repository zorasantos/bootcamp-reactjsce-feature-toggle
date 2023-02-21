import { useEffect, useState } from "react";
import { getValue } from "firebase/remote-config";
import { fetchRemoteConfig, remoteConfig } from "./services/firebase";
import { LoginPage } from "./views/login";


function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchRemoteConfig().then(() => setLoading(false));
  }, []);

  if (loading) {
    return <div className="text-white">Loading...</div>;
  }

  const val = getValue(remoteConfig, "new_API_login")

  console.log("val", val)
  return (
    <div className="flex h-screen justify-center items-center p-5">
      <LoginPage />
    </div>
  );
}

export default App;
