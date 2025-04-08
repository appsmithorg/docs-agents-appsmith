import React from "react";
import styles from "./IntegrationCards.module.css"; // Import CSS Module

const integrations = [
  { name: "AIChat", icon: "/img/AIChat.svg", description: "AIChat allows you to integrate chat functionality seamlessly.", link: "/build-agents/widgets/reference/AIChat" },
  { name: "Button", icon: "/img/Button.svg", description: "Button enables user interactions with a single click.", link: "/build-agents/widgets/reference/button" },
  { name: "Checkbox", icon: "/img/Checkbox.svg", description: "Checkbox allows users to select multiple options.", link: "/build-agents/widgets/reference/checkbox" },
  { name: "Checkbox Group", icon: "/img/Checkbox_Group.svg", description: "Checkbox Group organizes multiple checkboxes together.", link: "/build-agents/widgets/reference/checkbox-group" },
  { name: "ComboBox", icon: "/img/ComboBox.svg", description: "ComboBox provides a dropdown list with search capabilities.", link: "/build-agents/widgets/reference/ComboBox" },
  { name: "Currency Input", icon: "/img/Currency_Input.svg", description: "Currency Input lets users enter monetary values with formatting.", link: "/build-agents/widgets/reference/currency-input" },
  { name: "Custom", icon: "/img/Custom.svg", description: "Custom widget enables unique UI components for specific use cases.", link: "/build-agents/widgets/reference/custom" },
  { name: "Date", icon: "/img/Date.svg", description: "Date widget helps users pick a date from a calendar.", link: "/build-agents/widgets/reference/date" },
  { name: "Email Input", icon: "/img/Email_Input.svg", description: "Email Input ensures proper email format validation.", link: "/build-agents/widgets/reference/emailinput" },
  { name: "Heading", icon: "/img/Heading.svg", description: "Heading widget structures content with different text sizes.", link: "/build-agents/widgets/reference/Heading" },
  { name: "Icon Button", icon: "/img/Icon_Button.svg", description: "Icon Button provides a clickable button with an icon.", link: "/build-agents/widgets/reference/icon-button" },
  { name: "Inline Button", icon: "/img/Inline_Button.svg", description: "Inline Button allows actions directly within content flows.", link: "/build-agents/widgets/reference/inline-button" },
  { name: "Input", icon: "/img/Input.svg", description: "Input widget captures user text input efficiently.", link: "/build-agents/widgets/reference/input" },
  { name: "Menu Button", icon: "/img/Menu_Button.svg", description: "Menu Button provides dropdown menu navigation.", link: "/build-agents/widgets/reference/menu-button" },
  { name: "Modal", icon: "/img/Modal.svg", description: "Modal displays overlay pop-ups for additional content.", link: "/build-agents/widgets/reference/modal" },
  { name: "Multiline Input", icon: "/img/Multiline_Input.svg", description: "Multiline Input allows text area input for long messages.", link: "/build-agents/widgets/reference/multilineInput" },
  { name: "Number Input", icon: "/img/Number_Input.svg", description: "Number Input restricts input to numerical values.", link: "/build-agents/widgets/reference/number-input" },
  { name: "Paragraph", icon: "/img/Paragraph.svg", description: "Paragraph widget structures longer text content.", link: "/build-agents/widgets/reference/paragraph" },
  { name: "Password Input", icon: "/img/Password_Input.svg", description: "Password Input securely hides user credentials.", link: "/build-agents/widgets/reference/password-input" },
  { name: "Phone Input", icon: "/img/Phone_Input.svg", description: "Phone Input ensures proper phone number formatting.", link: "/build-agents/widgets/reference/phone-input" },
  { name: "Radio Group", icon: "/img/Radio_Group.svg", description: "Radio Group allows users to select a single option.", link: "/build-agents/widgets/reference/radio-group" },
  { name: "Select", icon: "/img/Select.svg", description: "Select widget provides a dropdown selection list.", link: "/build-agents/widgets/reference/select" },
  { name: "Stats", icon: "/img/Stats.svg", description: "Stats widget showcases numerical data insights.", link: "/build-agents/widgets/reference/stats" },
  { name: "Switch", icon: "/img/Switch.svg", description: "Switch enables toggling between two states.", link: "/build-agents/widgets/reference/switch" },
  { name: "Switch Group", icon: "/img/Switch_Group.svg", description: "Switch Group organizes multiple toggle switches.", link: "/build-agents/widgets/reference/switch-group" },
  { name: "Table", icon: "/img/Table.svg", description: "Table displays structured data in a grid format.", link: "/build-agents/widgets/reference/table" },
  { name: "Toolbar", icon: "/img/Toolbar.svg", description: "Toolbar provides quick access to multiple actions.", link: "/build-agents/widgets/reference/toolbar" },
  { name: "Zone", icon: "/img/Zone.svg", description: "Zone widget helps organize layout and content areas.", link: "/build-agents/widgets/reference/zone" },
];

const WidgetIntegrationCards = ({ name, icon, description, link }) => {
  return (
    <a href={link} className={styles.integrationCard}>
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
