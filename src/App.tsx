import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import LoginForm from "./components/LoginForm";
import UserDetails from "./components/UserDetails";
import type { IUserData } from "./interfaces";

function App() {
  const company = "My Company";
  const aboutCompany = "About Us";
  const [isLogged, setIsLoggedIn] = useState(false);

  const [userData, setUserData] = useState<IUserData>({
    username: "",
    email: "",
    password: "",
    address: "",
    phone: "",
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
        <UserDetails user={userData} />
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
