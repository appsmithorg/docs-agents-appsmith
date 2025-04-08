import React from "react";
import styles from "./IntegrationCards.module.css"; // Import CSS Module

const integrations = [
  { name: "File Upload", icon: "/img/file_upload.svg", description: "Directly upload documents for agents to reference", docPath: "/connect-data/integrations/reference/knowledge-bases/overview" },
  { name: "Box", icon: "/img/box1.svg", description: "Access enterprise content managed in Box", docPath: "/connect-data/integrations/reference/knowledge-bases/overview" },
  { name: "Dropbox", icon: "/img/dropbox1.svg", description: "Access enterprise content managed in Dropbox", docPath: "/connect-data/integrations/reference/knowledge-bases/overview" },
  { name: "Google Drive", icon: "/img/google_drive1.svg", description: "Access files and documents in GDrive", docPath: "/connect-data/integrations/reference/knowledge-bases/overview" },
  { name: "Notion", icon: "/img/notion1.svg", description: "Access documents and data in Notion", docPath: "/connect-data/integrations/reference/knowledge-bases/overview" },
  { name: "OneDrive", icon: "/img/onedrive1.svg", description: "Access content stored in the OneDrive cloud", docPath: "/connect-data/integrations/reference/knowledge-bases/overview" },
  { name: "Web Scraper", icon: "/img/web_scraper.svg", description: "Pull data from any internal or external website", docPath: "/connect-data/integrations/reference/tools/rest-api" },
  { name: "Confluence", icon: "/img/confluence1.svg", description: "Access Confluence documentation shared by your teams", docPath: "/connect-data/integrations/reference/knowledge-bases/overview" },
];

const IntegrationCard = ({ name, icon, description }) => {
  return (
    <div className={styles.integrationCard}>
      <img src={icon} alt={name} className={styles.integrationIcon} />
      <h3 className={styles.cardTitle}>{name}</h3>
      <p className={styles.cardDescription}>{description}</p>
    </div>
  );
};

const IntegrationGrid = () => {
  return (
    <div className={styles.integrationGrid}>
      {integrations.map((integration) => (
        <IntegrationCard key={integration.name} {...integration} />
      ))}
    </div>
  );
};

export default IntegrationGrid;
