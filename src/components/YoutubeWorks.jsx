import { motion } from "framer-motion";

const YoutubeWorks = () => {
  return (
    <div className="Youtube-works" id="youtube-section">
      <div className="container">
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-4 text-center font-robotoBold text-3xl capitalize"
        >
          works
        </motion.h1>
        <div className="Youtube-works-wrapper grid grid-cols-2 gap-5">
          <YoutubeVideo embedId={"pGoKgVCFvaw"} />
          <YoutubeVideo embedId={"AU_1juFRDWo"} />
          <YoutubeVideo embedId={"QTThmZu4O9s"} />
          <YoutubeVideo embedId={"hMDsFetFn-o"} />
        </div>
      </div>
    </div>
  );
};

export default YoutubeWorks;

// eslint-disable-next-line react/prop-types
const YoutubeVideo = ({ embedId }) => {
  return (
    <div className="video-responsive">
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
};
