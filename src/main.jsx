import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header.jsx";
import LoginPage from "./LoginPage.jsx";

function App() {
  const [page, setPage] = useState("home");

  return (
    <>
      {page === "home" && (
        <Header onLoginClick={() => setPage("login")} />
      )}
      {page === "login" && <LoginPage />}
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
