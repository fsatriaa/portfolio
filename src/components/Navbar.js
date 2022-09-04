import React, { useEffect, useState } from "react";

function Navbar() {
  //Hamburger
  const [hamburger, setHamburger] = useState(false);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onscroll = () => setOffset(window.pageYOffset);
    window.removeEventListener("scroll", onscroll);
    window.addEventListener("scroll", onscroll, { passive: true });
    return () => window.removeEventListener("scroll", onscroll);
  }, []);

  return (
    <header
      className={
        offset
          ? "bg-transparent absolute top-0 left-0 w-full flex items-center z-10 navbar-fixed"
          : "bg-transparent absolute top-0 left-0 w-full flex items-center z-10"
      }
    >
      <div className="container">
        <div className="flex items-center justify-between relative">
          <div className="px-4">
            <a
              href="#home"
              className="font-bold text-lg text-primary block py-6"
            >
              Febrinawan
            </a>
          </div>
          <div className="flex items-center px-4">
            <button
              id="hamburger"
              name="hamburger"
              type="button"
              className={
                hamburger
                  ? "block absolute right-4 lg:hidden hamburger-active"
                  : "block absolute right-4 lg:hidden"
              }
              onClick={() => setHamburger(!hamburger)}
            >
              <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
              <span className="hamburger-line transition duration-300 ease-in-out"></span>
              <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
            </button>
            <nav
              id="nav-menu"
              className={
                hamburger
                  ? "absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full"
                  : "hidden lg:block lg:static lg:bg-transparent lg:max-w-full"
              }
            >
              <ul className="block lg:flex">
                <li className="group">
                  <a
                    href="#home"
                    className="text-base text-dark py-2 mx-8 flex hover:text-primary"
                  >
                    Home
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#about"
                    className="text-base text-dark py-2 mx-8 flex hover:text-primary"
                  >
                    About Me
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#portfolio"
                    className="text-base text-dark py-2 mx-8 flex hover:text-primary"
                  >
                    Portfolio
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#client"
                    className="text-base text-dark py-2 mx-8 flex hover:text-primary"
                  >
                    Clients
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
