import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Requirements from "@site/src/components/Requirements";
import screenshot from "@site/static/img/screenshot.png";
import { FaCloudDownloadAlt } from "react-icons/fa";
import Why from "../components/Why";
import SupportFrom from "../components/SupportFrom";

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
          style={{
            maxHeight: 350,
            marginBottom: 20,
            boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
          }}
        />
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/downloads">
            <div style={{ display: "flex", alignItems: "center" }}>
              <FaCloudDownloadAlt />
              &nbsp; Download NiceNode
            </div>
          </Link>
        </div>
        <div>
          <span>
            Please read the{" "}
            <Link
              to={"#requirements"}
              style={{ color: "white", textDecoration: "underline" }}
            >
              requirements
            </Link>{" "}
            first
          </span>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={""} description={`${siteConfig.tagline}`}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <hr></hr>
        <Requirements />
        <hr></hr>
        <Why />
        <SupportFrom />
      </main>
    </Layout>
  );
}
