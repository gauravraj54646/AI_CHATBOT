import { Outlet, useNavigate } from "react-router-dom";
import "./dashboardLayout.css";
import { useAuth } from "@clerk/clerk-react";
import { useEffect } from "react";
import ChatList from "../../components/chatList/ChatList";

const DashboardLayout = () => {
  const { userId, isLoaded } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (isLoaded && !userId) {  //i.e i am not authenticated so redirect to sign in
      console.log(`you are not authenticated. please authenticate yourself.`)
      navigate("/sign-in");
    }
  }, [isLoaded, userId, navigate]);

  if (!isLoaded){
     console.log(`wait it is loading!`)
    return "Loading...";  // waiting for authrntication
  }
  return (
    <div className="dashboardLayout">
      <div className="menu"><ChatList/></div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;