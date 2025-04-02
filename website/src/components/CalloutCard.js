import React from "react";
import PropTypes from "prop-types";
import styles from "./CalloutCard.module.css";

const CalloutCard = ({ text, tag }) => {
  return (
    <div className={styles.calloutCard}>
      {tag && <span className={styles.tag}>{tag}</span>}
      <p>{text}</p>
    </div>
  );
};

CalloutCard.propTypes = {
  text: PropTypes.string.isRequired,
  tag: PropTypes.string, // Accepts any string as a tag
};

CalloutCard.defaultProps = {
  tag: "", // Default to empty, meaning no tag
};

export default CalloutCard;
