import React from "react";
import styles from "./HomepageCards.module.css"; // ✅ Import styles

// Import SVG assets for Docusaurus
import learningBg from "@site/static/img/learning-bg.svg";
import guidesBg from "@site/static/img/guides-bg.svg";
import widgetsBg from "@site/static/img/widgets-bg.svg";

const HomePageCards = () => {
  const cards = [
    {
      title: "Build Your First Agent",
      description: "Learn how to use our platform with step-by-step guides.",
      link: "/getting-started/build-your-first-agent",
      bg: learningBg,
      className: styles.tutorials,
    },
    {
      title: "Guides",
      description: "Explore detailed documentation on features and best practices.",
      link: "/build-agents/how-to-guides/overview",
      bg: guidesBg,
      className: styles.guides,
    },
    {
      title: "Widgets",
      description: "Find and customize powerful widgets for your application.",
      link: "/build-agents/widgets/overview",
      bg: widgetsBg,
      className: styles.widgets,
    },
  ];

  return (
    <div className={styles.container}>
      {cards.map((card, index) => (
        <a
          href={card.link}
          key={index}
          className={`${styles.card} ${card.className}`}
        >
          <div className={styles.text}>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
          <div className={styles.icon} style={{ backgroundImage: `url(${card.bg})` }}></div>
        </a>
      ))}
    </div>
  );
};

export default HomePageCards;
