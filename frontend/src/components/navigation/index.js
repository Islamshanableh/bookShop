import React, { useContext } from "react";
import { Link, Route } from "react-router-dom";
import { userContext } from "../../App";
import { MdAddShoppingCart } from "react-icons/md";
import "./navigation.css";
import { numberContext } from "../../App";
import { Profile } from "../profile/profile";
import { Search } from "../search/Search";

// import {userContext} from "../../App"

const Navigation = () => {
  const cart = useContext(numberContext);
  console.log(cart);
  const token = useContext(userContext);
  token.setToken(localStorage.getItem("token"));
  return (
    <nav className="fixed">
      {!token.token ? (
        <ul className="nav-list">
          <li className="nav-item">
            <h3 className="kero">KERO BOOK</h3>
          </li>
          <li className="nav-item search">
            <Search />
          </li>
          <li className="nav-item">
            <Link to="/login">Login </Link>
          </li>
          <li className="nav-item">
            <Link to="/signUp">Register</Link>
          </li>
          <li className="nav-item">
            <Link to="/home">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/aboutUs">AboutUs</Link>
          </li>
        </ul>
      ) : (
        <ul className="nav-list">
          <li className="nav-item">
            <h3 className="kero">KERO BOOK</h3>
          </li>
          <li className="nav-item search">
            <Search />
          </li>
          <li className="nav-item">
            <Link className="Link" to="/home">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="Link" to="/aboutUs">
              AboutUs
            </Link>
          </li>
          <li className="nav-item">
            <Link className="Link" to="/favourite">
              Favourite
            </Link>
          </li>
          <li className="nav-item">
            <Link className="Link odai" to="/cart">
              <MdAddShoppingCart size="2em" />{" "}
              <div className="n">{cart.number}</div>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="Link" to="/logOut">
              LogOut
            </Link>
          </li>
          <li className="nav-item">
            <Profile />
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navigation;
