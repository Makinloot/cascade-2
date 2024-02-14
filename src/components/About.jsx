import { motion } from "framer-motion";
import pfImage from "/hero.png";
import instagram from "/socials/instagram.svg";
import soundcloud from "/socials/soundcloud.svg";
import youtube from "/socials/youtube.svg";
export default function About() {
  return (
    <section className="About" id="about-section">
      <div className="container">
        <div className="About-wrapper my-10 flex flex-col items-center justify-center overflow-hidden lg:my-20">
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center font-robotoBold text-3xl capitalize"
          >
            cascade records
          </motion.h1>
          <div className="my-20 flex w-full flex-col items-center justify-center lg:flex-row lg:items-start">
            <motion.div
              initial={{ opacity: 0, x: -500 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className=""
            >
              <img
                className="w-full max-w-[350px] rounded-lg"
                src={pfImage}
                alt="cascade selector"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 500 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="my-8 max-w-[600px] flex-1 items-start lg:my-0 lg:ml-8 "
            >
              <p className="indent-8 lg:text-lg">
                CASCADE RECORDS is an underground techno label. It was founded
                in early 2020, in the suburbs of Tbilisi by techno artist IV.
                Production in 2020 moved to spain in province of Valencia,
                Castellón. In the end of 2020, unknown until now techno artist
                by nickname Ramzi became first resident of label, Ramzi artist,
                which combines Techno and Hardtechno by solo projects like
                Techno ACT and Techno Revelation. After this Project CASCADE
                became more active in production to be more oriented on
                listeners and for techno industry.
              </p>
              <p className="indent-8 lg:text-lg">
                CASCADE has organized view how should underground techno events
                work. Label with new projects: Selector Series, Promo Series,
                Down Industrial, Demo Series, aims to share underground techno
                vision to people and techno scenes in different locations.
              </p>
              <p className="indent-8 lg:text-lg">
                One of the main component of Label Acid-Industrial is acid
                effects, brutal industrial sounds with ambient, dark background.
                For Record Projects and future plans, it is crucial from
                internet platforms, events, radio channels and Spain or any
                different place to move to boiling techno ravers and with them
                join this culture with active movement.
              </p>
              <div className="social-medias mt-6">
                <motion.h3
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.7 }}
                  className="font-robotoBold text-lg capitalize"
                >
                  socials
                </motion.h3>
                <div className="socials flex gap-2">
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
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
