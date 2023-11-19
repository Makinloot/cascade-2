/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { HiMenuAlt3 } from "react-icons/hi";
import { useAppContext } from "../../context/ContextProvider";
import logo from "/cascade-light.png";
import Headroom from "react-headroom";
import "./Header.css";
export default function Header() {
  const { setShowMenu, showMenu } = useAppContext();

  return (
    <Headroom downTolerance={10} upTolerance={10}>
      <motion.header
        initial={{ opacity: 0, y: "-100%" }}
        animate={!showMenu ? { opacity: 1, y: 0 } : "initial"}
        transition={{ delay: !showMenu ? 0.3 : 0 }}
        className="Header z-[1000] w-full bg-[#11172638]"
      >
        <div className="container">
          <div className="Header-wrapper flex h-24 items-center justify-between">
            <a href="/" className="logo w-[200px]">
              <img src={logo} className="w-full" />
            </a>
            <Navbar />
            <div className="md:hidden">
              <button onClick={() => setShowMenu(!showMenu)}>
                <HiMenuAlt3 size={44} />
              </button>
            </div>
          </div>
        </div>
      </motion.header>
    </Headroom>
  );
}

// create navbar
function Navbar() {
  return (
    <nav className="Navbar hidden md:block">
      <NavLink value={"about"} url={"#about-section"} />
      <NavLink value={"works"} url={"#works-section"} />
    </nav>
  );
}

// create navbar links with animations
function NavLink({ value, url }) {
  return (
    <motion.a
      href={url}
      className="lg:hover:text-lightBlue font-primaryBold mr-7 inline-block cursor-pointer text-[1.25rem] uppercase"
    >
      {value}
    </motion.a>
  );
}
