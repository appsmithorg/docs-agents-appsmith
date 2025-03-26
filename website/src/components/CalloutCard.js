import React from "react";
import PropTypes from "prop-types";
import styles from "./CalloutCard.module.css";

const CalloutCard = ({ text, isBeta }) => {
  return (
    <div className={styles.calloutCard}>
      {isBeta && <span className={styles.betaTag}>Beta</span>}
      <p>{text}</p>
    </div>
  );
};

CalloutCard.propTypes = {
  text: PropTypes.string.isRequired,
  isBeta: PropTypes.bool,
};

CalloutCard.defaultProps = {
  isBeta: false,
};

export default CalloutCard;
