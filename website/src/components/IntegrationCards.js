import React from "react";
import styles from "./IntegrationCards.module.css"; // Import CSS Module

const integrations = [
  { name: "Box", icon: "/img/box.svg", description: "Access enterprise content managed in Box" },
  { name: "Confluence", icon: "/img/confluence.svg", description: "Access Confluence documentation shared by your teams" },
  { name: "Dropbox", icon: "/img/dropbox.svg", description: "Access enterprise content managed in Dropbox" },
  { name: "File Upload", icon: "/img/file_upload.svg", description: "Directly upload documents for agents to reference" },
  { name: "Freshdesk", icon: "/img/freshdesk.svg", description: "Access customer tickets and support conversations" },
  { name: "Google Drive", icon: "/img/google_drive.svg", description: "Access files and documents in GDrive" },
  { name: "Intercom", icon: "/img/intercom.svg", description: "Access customer and prospect messages" },
  { name: "Jira", icon: "/img/jira.svg", description: "Access issue and project information in Jira" },
  { name: "Notion", icon: "/img/notion.svg", description: "Access documents and data in Notion" },
  { name: "OneDrive", icon: "/img/onedrive.svg", description: "Access content stored in the OneDrive cloud" },
  { name: "Salesforce", icon: "/img/salesforce.svg", description: "Access sales and customer data in Salesforce" },
  { name: "SharePoint", icon: "/img/sharepoint.svg", description: "Access enterprise content managed in SharePoint" },
  { name: "Web Scraper", icon: "/img/web_scraper.svg", description: "Pull data from any internal or external website" },
  { name: "Zendesk", icon: "/img/zendesk.svg", description: "Access customer tickets and support conversations" },
];

const IntegrationCard = ({ name, icon, description }) => {
  return (
    <a href="#" className={styles.integrationCard}>
      <img src={icon} alt={name} className={styles.integrationIcon} />
      <h3 className={styles.cardTitle}>{name}</h3>
      <p className={styles.cardDescription}>{description}</p>
    </a>
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
