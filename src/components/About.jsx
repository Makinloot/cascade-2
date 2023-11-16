import { motion } from "framer-motion";
import pfImage from "/test.png";
import instagram from "/socials/instagram.svg";
import soundcloud from "/socials/soundcloud.svg";
import youtube from "/socials/youtube.svg";
export default function About() {
  return (
    <section className="About" id="about-section">
      <div className="container">
        <div className="About-wrapper my-20 flex flex-col items-center justify-center overflow-hidden">
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="font-robotoBold text-center text-3xl capitalize"
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
              className="my-8 max-w-[600px] flex-1 lg:my-0 lg:ml-8 "
            >
              <p className="lg:text-lg">
                Cascade records is a techno-ambient label founded in the capital
                of Georgia, Tbilisi, the author and founder of the idea is the
                solo mysterious project artist IV Georgian artist, who from 2020
                presents projects in the dark-ambient genre such as Cascade
                promo series, Cascade demo series.. Cascade family in 2021-22
                After the expansion, the label continued to operate in
                Spain.Where Cascade Records new resident Ramzi, in collaboration
                with founder IV, presents B2B projects, Cascade sellers series,
                Cascade podcast series, and the label also presents epic solo
                podcasts by legendary techno artists from various labels
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
