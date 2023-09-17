import { useState } from "react";
import bars from "../assets/bars-solid.svg";
import { useNavigate } from "react-router-dom";

export default function NavBarMenu() {
  const [isShowing, setIsShowing] = useState(false);
  const navigate = useNavigate();

  return (
    <div>
      <img
        className="navbar-menu"
        src={bars}
        onClick={() => setIsShowing((prev) => !prev)}
      />
      {isShowing && (
        <div className="navbar-menu-dd">
          <div className="navbar-dd-button" onClick={() => navigate("/")}>
            🏠 Home
          </div>
          <div className="navbar-dd-button" onClick={() => navigate("/budget")}>
            📊 Budget
          </div>
          <div className="navbar-dd-button" onClick={() => navigate("/chat")}>
            💬 Chat
          </div>
          <div className="navbar-dd-button" onClick={() => navigate("/learn")}>
            🎓 Learn
          </div>
        </div>
      )}
    </div>
  );
}
