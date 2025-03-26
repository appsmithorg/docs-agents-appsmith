import React from "react";
import styles from "./IntegrationCards.module.css"; // Import CSS Module

const integrations = [
  { name: "AIChat", icon: "/img/AIChat.svg", description: "AIChat allows you to integrate chat functionality seamlessly." },
  { name: "Button", icon: "/img/Button.svg", description: "Button enables user interactions with a single click." },
  { name: "Checkbox", icon: "/img/Checkbox.svg", description: "Checkbox allows users to select multiple options." },
  { name: "Checkbox Group", icon: "/img/Checkbox_Group.svg", description: "Checkbox Group organizes multiple checkboxes together." },
  { name: "ComboBox", icon: "/img/ComboBox.svg", description: "ComboBox provides a dropdown list with search capabilities." },
  { name: "Currency Input", icon: "/img/Currency_Input.svg", description: "Currency Input lets users enter monetary values with formatting." },
  { name: "Custom", icon: "/img/Custom.svg", description: "Custom widget enables unique UI components for specific use cases." },
  { name: "Date", icon: "/img/Date.svg", description: "Date widget helps users pick a date from a calendar." },
  { name: "Email Input", icon: "/img/Email_Input.svg", description: "Email Input ensures proper email format validation." },
  { name: "Heading", icon: "/img/Heading.svg", description: "Heading widget structures content with different text sizes." },
  { name: "Icon Button", icon: "/img/Icon_Button.svg", description: "Icon Button provides a clickable button with an icon." },
  { name: "Inline Button", icon: "/img/Inline_Button.svg", description: "Inline Button allows actions directly within content flows." },
  { name: "Input", icon: "/img/Input.svg", description: "Input widget captures user text input efficiently." },
  { name: "Menu Button", icon: "/img/Menu_Button.svg", description: "Menu Button provides dropdown menu navigation." },
  { name: "Modal", icon: "/img/Modal.svg", description: "Modal displays overlay pop-ups for additional content." },
  { name: "Multiline Input", icon: "/img/Multiline_Input.svg", description: "Multiline Input allows text area input for long messages." },
  { name: "Number Input", icon: "/img/Number_Input.svg", description: "Number Input restricts input to numerical values." },
  { name: "Paragraph", icon: "/img/Paragraph.svg", description: "Paragraph widget structures longer text content." },
  { name: "Password Input", icon: "/img/Password_Input.svg", description: "Password Input securely hides user credentials." },
  { name: "Phone Input", icon: "/img/Phone_Input.svg", description: "Phone Input ensures proper phone number formatting." },
  { name: "Radio Group", icon: "/img/Radio_Group.svg", description: "Radio Group allows users to select a single option." },
  { name: "Select", icon: "/img/Select.svg", description: "Select widget provides a dropdown selection list." },
  { name: "Stats", icon: "/img/Stats.svg", description: "Stats widget showcases numerical data insights." },
  { name: "Switch", icon: "/img/Switch.svg", description: "Switch enables toggling between two states." },
  { name: "Switch Group", icon: "/img/Switch_Group.svg", description: "Switch Group organizes multiple toggle switches." },
  { name: "Table", icon: "/img/Table.svg", description: "Table displays structured data in a grid format." },
  { name: "Toolbar", icon: "/img/Toolbar.svg", description: "Toolbar provides quick access to multiple actions." },
  { name: "Zone", icon: "/img/Zone.svg", description: "Zone widget helps organize layout and content areas." },
];

const WidgetIntegrationCards = ({ name, icon, description }) => {
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
        <WidgetIntegrationCards key={integration.name} {...integration} />
      ))}
    </div>
  );
};

export default IntegrationGrid;
