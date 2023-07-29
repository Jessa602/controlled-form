import { useState } from "react";
import "./App.css";
import SignUpForm from "./components/SignUpForm.jsx";
import Authenticate from "./components/Authenitcate.jsx";

function App() {
  const [token, setToken] = useState(null);
  return (
    <>
      <div className="App">
        <SignUpForm token={token} setToken={setToken} />
        <Authenticate token={token} setToken={setToken} />
      </div>
    </>
  );
}

export default App;
