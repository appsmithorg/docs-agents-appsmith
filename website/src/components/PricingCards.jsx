import React from "react";
import styles from "./PricingCards.module.css";

const CheckIcon = () => (
  <span role="img" aria-label="check" style={{ marginRight: "0.5rem", minWidth: "18px" }}>
    ✅
  </span>
);

const Feature = ({ text }) => (
  <li className={styles.featureItem}>
    <CheckIcon />
    <span>{text}</span>
  </li>
);

export default function PricingCards() {
  return (
    <div className={styles.pricingGrid}>
      <div className={styles.card}>
        <div className={styles.cardContent}>
          <h3>🧑‍💻 Team Plan</h3>
          <p className={styles.price}>$15 per user/month</p>
          <p className={styles.subtext}>
            <em>Billed monthly; includes a 7-day free trial — no credit card required</em>
          </p>
          <p>
            Ideal for small-to-medium sized teams looking to integrate AI agents into their workflows.
          </p>

          <ul>
            <Feature text="Up to 99 users (developers & end-users combined)" />
            <Feature text="1GB Retrieval-Augmented Generation (RAG) storage" />
            <Feature text="Function calls to any API and Database" />
            <Feature text="Google Single Sign-On (SSO)" />
            <Feature text="User Groups & Role-based Access Control (RBAC)" />
            <Feature text="Embed agents anywhere within your applications" />
            <Feature text="Custom branding to match your organization's identity" />
          </ul>

          <div className={styles.buttonWrapper}>
            <a className={styles.buttonPrimary} href="#">Start your 7-day free trial</a>
          </div>
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.cardContent}>
          <h3>🏢 Enterprise Plan</h3>
          <p className={styles.price}>Custom Pricing</p>
          <p className={styles.subtext}><em>Contact Sales</em></p>
          <p>
            Perfect for larger teams and enterprises requiring advanced integrations and support.
          </p>

          <ul>
            <Feature text="Unlimited users" />
            <Feature text="Unlimited Retrieval-Augmented Generation (RAG) storage" />
            <Feature text="Self-hosting or Managed hosting" />
            <Feature text="Advanced SSO with OIDC/SAML" />
            <Feature text="Audit logs and enhanced security" />
            <Feature text="Dedicated support team & SLA" />
            <Feature text="Personalized support from an AI Solutions Expert" />
          </ul>

          <div className={styles.buttonWrapper}>
            <a className={styles.buttonSecondary} href="#">Book a meeting to discuss Enterprise options</a>
          </div>
        </div>
      </div>
    </div>
  );
}
