import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { signInSuccess } from "../redux/user/userSlice";
import { app } from "../firebase.js";
import { useDispatch } from "react-redux";
function Oauth() {
  const disaptch = useDispatch();
  const handleGooleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);
      const result = await signInWithPopup(auth, provider);
      const res = await fetch("/api/auth/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          image: result.user.photoURL,
        }),
      });
      const data = await res.json();
      disaptch(signInSuccess(data));
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
