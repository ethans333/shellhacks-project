import { useNavigate } from "react-router-dom";
import NavBarMenu from "./NavbarMenu";

export default function NavBar() {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <div className="navbar-title gradient-text flex">
        <div>£inbot</div>
      </div>
      <div className="navbar-button" onClick={() => navigate("/")}>
        Home
      </div>
      <div className="navbar-button" onClick={() => navigate("/budget")}>
        Budget
      </div>
      <div className="navbar-button" onClick={() => navigate("/chat")}>
        Chat
      </div>
      <NavBarMenu />
    </div>
  );
}
