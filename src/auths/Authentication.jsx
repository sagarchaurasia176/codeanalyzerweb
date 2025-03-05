import { useState, useEffect } from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "./Firebase";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const Authentication = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  console.log("Fetched from hosted web-auth-firebase");

  const signInWithGoogle = async () => {
    setLoading(true);
    setError(null);

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      if (!user) throw new Error("No user data received");

      const idToken = await user.getIdToken();
      console.log("ID Token:", idToken);

      // Send token to parent window if available
      if (idToken) {
        window.opener?.postMessage({ idToken }, "*");
        window.close();
      }
    } catch (error) {
      setError(error.message);
      console.error("Login Error:", error);
    } finally {
      setLoading(false);
    }
  };

  // Listen for authentication requests from parent window
  useEffect(() => {
    const handleMessage = ({ data }) => {
      if (data?.initAuth) {
        signInWithGoogle();
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <div>
      <button onClick={signInWithGoogle} disabled={loading}>
        {loading ? "Signing in..." : "Sign in with Google"}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Authentication;
