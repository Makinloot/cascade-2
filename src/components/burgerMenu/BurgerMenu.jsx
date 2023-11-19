/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useAppContext } from "../../context/ContextProvider";
import { AiOutlineClose } from "react-icons/ai";
import instagram from "/socials/instagram.svg";
import soundcloud from "/socials/soundcloud.svg";
import youtube from "/socials/youtube.svg";
import "./BurgerMenu.css";

export default function BurgerMenu() {
  const { showMenu, setShowMenu } = useAppContext();
  return (
    <motion.div
      initial={{ x: "-100%", pointerEvents: "none" }}
      animate={showMenu ? { x: 0, pointerEvents: "all" } : "initial"}
      transition={{ duration: 0.4, type: "just" }}
      className="Burger-menu fixed z-[1000] h-screen w-full px-2"
    >
      <div className="container">
        <div className="flex justify-end pt-8">
          <motion.button
            initial={{ opacity: 0, x: -100 }}
            animate={showMenu ? { opacity: 1, x: 0 } : "initial"}
            transition={{ delay: showMenu ? 0.4 : 0, duration: 0.3 }}
            onClick={() => setShowMenu(!showMenu)}
          >
            <AiOutlineClose size={44} />
          </motion.button>
        </div>
        <nav className="mt-8 flex flex-col px-4">
          <BurgerLink value={"about"} delay={0.4} url={"#about-section"} />
          <BurgerLink value={"works"} delay={0.5} url={"#works-section"} />
        </nav>
        <motion.div
          initial={{ opacity: 0 }}
          animate={showMenu ? { opacity: 1 } : "initial"}
          transition={{ delay: showMenu ? 1 : 0, duration: 0.3 }}
          className="my-12 flex px-4"
        >
          <motion.a
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.7 }}
            href="https://www.instagram.com/cascadelive/"
            target="_blank"
          >
            <img src={instagram} alt="instagram" />
          </motion.a>
          <motion.a
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.9 }}
            href="https://soundcloud.com/ramzi911"
            target="_blank"
            className="mx-2"
          >
            <img src={soundcloud} alt="soundcloud" />
          </motion.a>
          <motion.a
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 1.1 }}
            href="https://www.youtube.com/@cascaderecords4122"
            target="_blank"
          >
            <img src={youtube} alt="youtube" />
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  );
}

// animated burger links
function BurgerLink({ value, delay, url }) {
  const { showMenu, setShowMenu } = useAppContext();
  return (
    <motion.a
      initial={{ opacity: 0, x: 80 }}
      animate={showMenu ? { opacity: 1, x: 0 } : "initial"}
      transition={{ delay: showMenu ? delay : 0, type: "spring", damping: 12 }}
      href={url}
      onClick={() => setShowMenu(false)}
      className="font-primaryBold mt-4 inline-block text-[2rem] uppercase sm:text-[3rem]"
    >
      {value}
    </motion.a>
  );
}
