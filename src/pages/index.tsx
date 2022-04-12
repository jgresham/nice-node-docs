import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import screenshot from "@site/static/img/screenshot.png";
import { FaCloudDownloadAlt } from "react-icons/fa";

// const screenshot = require("@site/static/img/screenshot.png");
function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <img
          src={screenshot}
          alt="NiceNode screenshot"
          style={{ maxHeight: 350, marginBottom: 20 }}
        />
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/downloads">
            <div style={{ display: "flex", alignItems: "center" }}>
              <FaCloudDownloadAlt />
              &nbsp; Download NiceNode
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
