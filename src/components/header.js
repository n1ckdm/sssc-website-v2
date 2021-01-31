import { Link } from "gatsby"
import React from "react"
import Logo from "../../assets/SSSC.svg"

const Header = () => {
  return (
    <header className="header relative lg:overflow-hidden">
      <nav className="md:p-3 py-2 px-3 z-10">
        <div className="container mx-auto flex flex-wrap items-center justify-start">
          <div className="flex-1 flex items-center justify-start self-start">
            <Link to="/" className="flex">
              <span className="text-white pr-2 my-auto text-xl font-semibold">
                SSSC
              </span>
              <img className="w-16" src={Logo} alt="SSSC Logo" />
            </Link>
          </div>
          <ul
            data-menu
            className="md:flex flex-wrap items-center justify-start text-white"
          >
            <li className="md:px-6 py-2 px-3">
              <Link to="/join">Join</Link>
            </li>
            <li className="md:px-6 py-2 px-3">
              <Link to="/news">News</Link>
            </li>
            <li className="md:px-6 py-2 px-3">
              <Link to="/about">About</Link>
            </li>
            <li className="md:px-6 py-2 px-3">
              <Link to="/comittee">Committee</Link>
            </li>
            {/* <li className="md:px-6 py-2 px-3">
              Link to="/">Racing</Link>
            </li> */}
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
