import { useNavigate } from "react-router-dom";
import NavBarMenu from "./NavbarMenu";

export default function NavBar() {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <div className="navbar-title gradient-text flex">
        <div>ƒinboʈ</div>
      </div>
      <div className="navbar-button" onClick={() => navigate("/")}>
        Home
      </div>
      <div className="navbar-button" onClick={() => navigate("/chat")}>
        Chat 💬
      </div>
      <div className="navbar-button" onClick={() => navigate("/learn")}>
        Learn 🎓
      </div>
      <NavBarMenu />
    </div>
  );
}
