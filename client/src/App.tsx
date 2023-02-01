import { useEffect, useState } from "react";
import { getValue } from "firebase/remote-config";
import { fetchRemoteConfig, remoteConfig } from "./services/firebase";


function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchRemoteConfig().then(() => setLoading(false));
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const val = getValue(remoteConfig, "new_API_login")

  console.log("val", val)
  return (
    <h1 className="text-3xl font-bold underline">Feature toggle</h1>
  );
}

export default App;
