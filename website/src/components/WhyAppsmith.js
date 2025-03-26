import React from "react";
import styles from "./WhyAppsmith.module.css";

// ✅ Import SVGs as React components
import EmbedIcon from "@site/static/img/embed-icon.svg";
import DatabaseIcon from "@site/static/img/database-icon.svg";
import AutomationIcon from "@site/static/img/automation-icon.svg";
import SecurityIcon from "@site/static/img/security-icon.svg";

const WhyAppsmith = () => {
  const features = [
    {
      title: "Seamless Embedding",
      description: "Deploy AI agents directly into your existing applications, Chrome extensions, and internal tools.",
      icon: EmbedIcon, // ✅ Use imported React component
    },
    {
      title: "Data-Driven Responses",
      description: "Securely connect to your databases, documentation, and APIs for highly accurate, contextual answers.",
      icon: DatabaseIcon,
    },
    {
      title: "Automated Actions",
      description: "Trigger workflows, approvals, and other app or human interactions based on AI-driven insights.",
      icon: AutomationIcon,
    },
    {
      title: "Enterprise-Grade Security",
      description: "Self-host in AWS, Azure, or GCP and maintain full control over your data and access permissions.",
      icon: SecurityIcon,
    },
  ];

  return (
    <div className={styles.container}>
      {features.map((feature, index) => (
        <div key={index} className={styles.card}>
          {/* ✅ Use inline SVG instead of <img> */}
          <feature.icon className={styles.icon} />
          <div className={styles.text}>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WhyAppsmith;
