import React from "react";
import styles from "./BuildHomeCards.module.css";

const BuildHomeCards = ({ cards }) => {
  return (
    <div className={styles.container}>
      {cards.map((card, index) => (
        <a
          href={card.link}
          key={index}
          className={`${styles.card} ${styles[card.className]}`}
        >
          <div className={styles.text}>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default BuildHomeCards;
