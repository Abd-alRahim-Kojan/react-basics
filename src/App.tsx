import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import LoginForm from "./components/LoginForm";

function App() {
  const company = "My Company";
  const aboutCompany = "About Us";
  const [isLogged, setIsLoggedIn] = useState(false);

  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    address: "",
  });

  return (
    <>
      <Navbar
        companyName={company}
        about={aboutCompany}
        login={isLogged}
        setLogin={setIsLoggedIn}
      />

      {isLogged ? (
        "Welcome Back!"
      ) : (
        <LoginForm
          userData={userData}
          setUserData={setUserData}
          setLogin={setIsLoggedIn}
        />
      )}
    </>
  );
}

export default App;
