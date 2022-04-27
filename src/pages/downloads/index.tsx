import React, { useEffect, useState } from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import styles from "../index.module.css";
import { FaExternalLinkAlt, FaLinux } from "react-icons/fa";
import { FaWindows } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import screenshot from "@site/static/img/screenshot.png";
import Requirements from "@site/src/components/Requirements";

const DEFAULT_RELEASE_VERSION = "0.8.0-alpha";

export default function Downloads() {
  const [sFetchedLatestReleaseVersion, setFetchedLatestReleaseVersion] =
    useState<string>();

  const getLatestReleaseVersion = async () => {
    const response = await fetch(
      "https://api.github.com/repos/jgresham/nice-node/releases/latest"
    );
    const latestReleaseJson = await response.json();
    if (latestReleaseJson && latestReleaseJson?.name) {
      // name = 0.8.0-alpha
      // tag_name = v0.8.0-alpha
      setFetchedLatestReleaseVersion(latestReleaseJson.name);
    }
  };

  useEffect(() => {}, [sFetchedLatestReleaseVersion]);

  useEffect(() => {
    getLatestReleaseVersion();
  }, []);

  let releaseVersion = sFetchedLatestReleaseVersion
    ? sFetchedLatestReleaseVersion
    : DEFAULT_RELEASE_VERSION;
  const DOWNLOAD_BASE = "https://github.com/jgresham/nice-node/releases";
  const LINUX_DOWNLOAD = `${DOWNLOAD_BASE}/download/v${releaseVersion}/NiceNode-${releaseVersion}.AppImage`;
  const WINDOWS_DOWNLOAD = `${DOWNLOAD_BASE}/download/v${releaseVersion}/NiceNode-Setup-${releaseVersion}.exe`;
  const MACOS_DOWNLOAD = `${DOWNLOAD_BASE}/download/v${releaseVersion}/NiceNode-${releaseVersion}-arm64.dmg`;
  const MACOS_INTEL_DOWNLOAD = `${DOWNLOAD_BASE}/download/v${releaseVersion}/NiceNode-${releaseVersion}.dmg`;
  const ALL_DOWNLOADS = `${DOWNLOAD_BASE}/tag/v${releaseVersion}`;

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
            <h1>Download NiceNode version {releaseVersion}</h1>
          </div>
          <div>
            <span>
              Please read the <Link to={"#requirements"}>requirements</Link>{" "}
              first
            </span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
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
                    &nbsp; {`Linux AppImage`}
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
                    &nbsp; {`Windows`}
                  </div>
                </Link>
              </div>
              <span>*Use "Run anyway" option</span>
            </div>

            <div style={{ margin: 5 }}>
              <div className={styles.buttons}>
                <Link
                  className="button button--secondary button--lg"
                  to={MACOS_DOWNLOAD}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <FaApple />
                    &nbsp; {`macOS, Apple Silicon`}
                  </div>
                </Link>
              </div>
              <span>*Try Control-click then "Open"</span>
            </div>
            <div style={{ margin: 5 }}>
              <div className={styles.buttons}>
                <Link
                  className="button button--secondary button--lg"
                  to={MACOS_INTEL_DOWNLOAD}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <FaApple />
                    &nbsp; {`macOS, Intel chip`}
                  </div>
                </Link>
              </div>
              <span>*Try Control-click then "Open"</span>
            </div>
            <div style={{ margin: 5 }}>
              <div className={styles.buttons}>
                <Link
                  className="button button--secondary button--lg"
                  to={ALL_DOWNLOADS}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    {`All NiceNode ${releaseVersion} downloads`} &nbsp;
                    <FaExternalLinkAlt />
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <img
            src={screenshot}
            alt="NiceNode screenshot"
            style={{ maxHeight: 350, marginTop: 30, marginBottom: 20 }}
          />
        </div>
      </div>
      <hr />
      <Requirements />
    </Layout>
  );
}
