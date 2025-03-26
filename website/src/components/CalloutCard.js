import React from "react";
import PropTypes from "prop-types";
import styles from "./CalloutCard.module.css";

const CalloutCard = ({ text }) => {
  return (
    <div className={styles.calloutCard}>
      <p>{text}</p>
    </div>
  );
};

CalloutCard.propTypes = {
  text: PropTypes.string.isRequired,
};

export default CalloutCard;
