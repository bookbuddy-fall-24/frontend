import { useState } from "react";
import { Routes, Router } from "react-router-dom";
import bookLogo from "./assets/books.png";
import Books from "./components/Books";
import Books from "./components/Account";
import Books from "./components/Login";
import Books from "./components/Register";

function App() {
  const [token, setToken] = useState(null);

  return (
    <>
      <h1>
        <img id="logo-image" src={bookLogo} />
        Library App
      </h1>

      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/me" element={<Account />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/*" element={<Books />} />
      </Routes>
    </>
  );
}

export default App;
