import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Singup from "./pages/Singup";
import Signin from "./pages/Signin";
import Profile from "./pages/Profile";
import Header from "./componets/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/sign-in" element={<Signin />} />
        <Route path="/sign-up" element={<Singup />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
