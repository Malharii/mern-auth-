import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { app } from "../firebase.js";
function Oauth() {
  const handleGooleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);
      const result = await signInWithPopup(auth, provider);
      console.log(result);
    } catch (error) {
      console.log("could not login with google", error);
    }
  };
  return (
    <button
      type="button"
      onClick={handleGooleClick}
      className="bg-red-500 hover:opacity-90 uppercase p-3 rounded-lg text-white "
    >
      contunue with google
    </button>
  );
}

export default Oauth;
