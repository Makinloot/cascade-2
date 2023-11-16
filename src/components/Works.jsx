import { motion } from "framer-motion";
export default function Works() {
  return (
    <section className="Works" id="works-section">
      <div className="container">
        <div className="Works-wrapper my-20 overflow-hidden">
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="font-robotoBold text-center text-3xl capitalize"
          >
            works
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="Works-soundcloud my-20"
          >
            <iframe
              color="#000000"
              width="100%"
              height="465"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/ramzi911&amp;"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
