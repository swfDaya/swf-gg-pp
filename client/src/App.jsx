import { useEffect } from "react";
import { useAuth } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import { SignedOut, SignInButton, SignedIn } from "@clerk/clerk-react";
import Home from "./Pages/LandingPage/Home/Home";
import DashboardRoot from "./Pages/Dashboard/DashboardRoot/DashboardRoot";

function App() {

  return (
    <div className="app-root">
      <SignedOut>
        <Home />
      </SignedOut>
      <SignedIn>
        <DashboardRoot />
      </SignedIn>
    </div>
  );
}

export default App;
