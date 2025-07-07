import { useState } from "react";
import Login from "./components/Login";
import Home from "./pages/Home";

export default function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));

  return (
    <>
      {!token ? (
        <Login setToken={setToken} />
      ) : (
        <Home setToken={setToken} />
      )}
    </>
  );
}