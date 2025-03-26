import React from "react";
import PropTypes from "prop-types";
import styles from "./VideoEmbedNew.module.css";

const VideoEmbedNew = ({ videoId, title }) => {
  return (
    <div className={styles.videoCard}>
      <div className={styles.videoContainer}>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?modestbranding=1&rel=0&showinfo=0&iv_load_policy=3`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      {title && <p className={styles.videoTitle}>{title}</p>}
    </div>
  );
};

VideoEmbedNew.propTypes = {
  videoId: PropTypes.string.isRequired,
  title: PropTypes.string,
};

VideoEmbedNew.defaultProps = {
  title: "",
};

export default VideoEmbedNew;
