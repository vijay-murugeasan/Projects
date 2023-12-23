import Logo from "./Logo";
import LogoImg from "/img/logo.svg";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import HeaderCart from "./HeaderCart";

function Header() {
  const [scrollTopData, setScrollTopData] = useState("");
  const { pathname } = useLocation();

  const headerClass =
    pathname === "/"
      ? `header black_nav clearfix element_to_stick ${scrollTopData}`
      : "header_in clearfix";

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY < 15) {
        setScrollTopData("");
      } else {
        setScrollTopData("sticky");
      }
    });
  }, []);

  return (
    <header className={headerClass}>
      <div className="container">
        <div id="logo">
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div className="layer"></div>
        <HeaderCart />
        <a href="#0" className="open_close">
          <i className="icon_menu"></i>
          <span>Menu </span>
        </a>
        <nav className="main-menu">
          <div id="header_menu">
            <a href="#0" className="open_close">
              <i className="icon_close"></i>
              <span>Menu </span>
            </a>
            <Link to="/">
              <img src={LogoImg} width="162" height="35" alt="" />
            </Link>
          </div>
          <ul>
            <li className="submenu">
              <Link to="/">Home</Link>

              {/* <a href="#0" className="show-submenu">
                Home
              </a>
              <ul>
                <li>
                  <a href="index.html">Address Autocomplete </a>
                </li>
              </ul> */}
            </li>
            <li>
              <Link to="/restaurant">Restaurants</Link>
            </li>

            <li>
              <Link to="/contact">Contacts</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
