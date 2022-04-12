import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import styles from "../index.module.css";
import { FaExternalLinkAlt, FaLinux } from "react-icons/fa";
import { FaWindows } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import screenshot from "@site/static/img/screenshot.png";

const RELEASE_VERSION = "0.2.0-alpha";
const DOWNLOAD_BASE = "https://github.com/jgresham/nice-node/releases";
const LINUX_DOWNLOAD = `${DOWNLOAD_BASE}/download/v${RELEASE_VERSION}/NiceNode-${RELEASE_VERSION}.AppImage`;
const WINDOWS_DOWNLOAD = `${DOWNLOAD_BASE}/download/v${RELEASE_VERSION}/NiceNode-Setup-${RELEASE_VERSION}.exe`;
const MACOS_DOWNLOAD = `${DOWNLOAD_BASE}/download/v${RELEASE_VERSION}/NiceNode-${RELEASE_VERSION}-arm64.dmg`;
const ALL_DOWNLOADS = `${DOWNLOAD_BASE}/tag/v${RELEASE_VERSION}`;

export default function Downloads() {
  return (
    <Layout title="Downloads" description="Downloads Page">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "50vh",
          padding: 15,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div>
            <h1>Download NiceNode version {RELEASE_VERSION}</h1>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <div style={{ margin: 5 }}>
              <div className={styles.buttons}>
                <Link
                  className="button button--secondary button--lg"
                  to={LINUX_DOWNLOAD}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <FaLinux />
                    &nbsp; NiceNode 0.2.0-alpha for Linux
                  </div>
                </Link>
              </div>
              <span>
                *
                <a href="https://github.com/TheAssassin/AppImageLauncher">
                  AppImage Launcher{" "}
                </a>
                recommended
              </span>
            </div>

            <div style={{ margin: 5 }}>
              <div className={styles.buttons}>
                <Link
                  className="button button--secondary button--lg"
                  to={WINDOWS_DOWNLOAD}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <FaWindows />
                    &nbsp; NiceNode 0.2.0-alpha for Windows
                  </div>
                </Link>
              </div>
              <span>
                *Must use Window's "Run anyway" option for alpha version
              </span>
            </div>

            <div style={{ margin: 5 }}>
              <div className={styles.buttons}>
                <Link
                  className="button button--secondary button--lg"
                  to={MACOS_DOWNLOAD}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <FaApple />
                    &nbsp; NiceNode 0.2.0-alpha for macOS
                  </div>
                </Link>
              </div>
              <span>
                *Must give{" "}
                <a href="https://support.apple.com/guide/mac-help/open-a-mac-app-from-an-unidentified-developer-mh40616/mac">
                  macOS permission
                </a>{" "}
                to NiceNode for alpha version
              </span>
            </div>
            <div className={styles.buttons}>
              <Link
                className="button button--secondary button--lg"
                to={ALL_DOWNLOADS}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  All NiceNode 0.2.0-alpha downloads &nbsp;
                  <FaExternalLinkAlt />
                </div>
              </Link>
            </div>
          </div>
          <img
            src={screenshot}
            alt="NiceNode screenshot"
            style={{ maxHeight: 350, marginTop: 30, marginBottom: 20 }}
          />
        </div>
      </div>
    </Layout>
  );
}
