import { useContext } from "react";
import { signOut } from "firebase/auth";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import "./Navbar.css";

export default function Navbar() {
  const navigate = useNavigate();
  const auth = useContext(AuthContext);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("Signed out successfully");
        //navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="navbar">
      <nav>
        <ul>
          <li>
            {" "}
            <Link to="/" className="title">
              {" "}
              SMY Children's Toys and Books store
            </Link>
          </li>

          <li>
            <NavLink to="/BuyingPage">Buying</NavLink>
          </li>

          <li>
            <NavLink to="/SellingPage">Selling</NavLink>
          </li>
          <li>
            {auth && auth.currentUser ? (
              <button onClick={handleLogout}> Logout </button>
            ) : (
              <button onClick={() => navigate("/login")}> Login </button>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
}
