import React, { useState } from "react"
import { Link } from "gatsby"
import logo from "../../images/logo.svg"
import { FaCartArrowDown } from "react-icons/fa"

const navbarHandler = (e, menuState, setMenuState) => {
  e.preventDefault()
  menuState.navbarOpen
    ? setMenuState(prevState => {
        return {
          ...prevState,
          navbarOpen: false,
          css: "collapse navbar-collapse",
        }
      })
    : setMenuState(prevState => {
        return {
          ...prevState,
          navbarOpen: true,
          css: "collapse navbar-collapse show",
        }
      })
}

const Navbar = () => {
  const [menuState, setMenuState] = useState({
    navbarOpen: false,
    css: "collapse navbar-collapse",
    links: [
      {
        id: 1,
        path: "/",
        text: "home",
      },
      {
        id: 2,
        path: "/about",
        text: "about",
      },
    ],
  })

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/" className="navbar-brand">
        <img src={logo} alt="Logo" />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        onClick={e => navbarHandler(e, menuState, setMenuState)}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={menuState.css}>
        <ul className="navbar-nav mx-auto">
          {menuState.links.map(link => (
            <li key={link.id} className="nav-item">
              <Link to={link.path} className="nav-link text-capitalize">
                {link.text}
              </Link>
            </li>
          ))}
          <li className="nav-item ml-sm-5">
            <FaCartArrowDown className="cart-icon" />
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
