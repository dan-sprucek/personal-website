import React from "react"
import {NavLink} from "react-router-dom"

const Navbar = ({en, pageName, handleLanguageChange}) => {

    return (
        <div>
            <nav id="navigationBar" className="navbar navbar-expand-md navbar-dark">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <span className="navbar-brand page-name">{pageName}</span>
                <span className="navbar-brand language-change" onClick={handleLanguageChange}><span className={en ? "language-disabled" : undefined}>CZ</span> | <span className={!en ? "language-disabled" : undefined}>EN</span></span>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink exact to="/" className="nav-link">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about" className="nav-link">{en ? "About" : "O mně"}</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/portfolio" className="nav-link">Portfolio</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contact" className="nav-link">{en ? "Contact" : "Kontakt"}</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar