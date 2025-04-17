import logo from '../assets/images/tb-accounting-logo.png';
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

type NavItem = {
  name: string;
  path: string;
};

const navItems: NavItem[] = [
  { name: "Services", path: "./#services" },
  { name: "Contact", path: "./#contact" },
  { name: "Testimonials", path: "./#testimonials" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav
      id="navbar"
      className="fixed top-0 left-0 z-50 md:flex hidden w-full bg-[#0f1c3c] py-6 sm:px-16 px-4 items-center"
    >
      <div className="navbar-logo w-[75px]">
        <a href="/"><img src={logo} alt='TBA Logo'></img></a>
      </div>

      <div className="flex ml-auto gap-6 px-8 text-indigo-600 text-lg font-bold uppercase">
        {navItems.map((item) => (
          <a href={item.path} key={item.path}>
            {item.name}
          </a>
        ))}
      </div>
    </nav>
    <nav className="fixed top-0 left-0 z-50 w-full bg-[#0f1c3c] py-6 sm:px-16 px-4 md:hidden flex items-center justify-between">
      {/* Logo */}
      <div className="navbar-logo w-[75px]">
        <a href="/">
          <img src={logo} alt="TBA Logo" />
        </a>
      </div>

      {/* Hamburger Icon (Mobile only) */}
      <button
        className="text-white text-4xl sm:hidden"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
      </button>

      {/* Links (Desktop only) */}
      <div className="hidden sm:flex ml-auto gap-6 px-8 text-indigo-600 text-lg font-bold uppercase">
        {navItems.map((item) => (
          <a href={item.path} key={item.path}>
            {item.name}
          </a>
        ))}
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white text-indigo-600 flex flex-col items-start gap-4 p-6 sm:hidden shadow-md z-40">
          {navItems.map((item) => (
            <a
              href={item.path}
              key={item.path}
              className="uppercase font-bold text-lg"
              onClick={() => setIsOpen(false)} // Close menu on click
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
    </>
    
  );
}

export default Navbar;
