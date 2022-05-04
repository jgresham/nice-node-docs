import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import styles from "../index.module.css";
import { FaExternalLinkAlt, FaLinux } from "react-icons/fa";
import { FaWindows } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import screenshot from "@site/static/img/screenshot.png";
import Requirements from "@site/src/components/Requirements";

const DEFAULT_RELEASE_VERSION = "0.8.0-alpha";

export default function FAQs() {
  return (
    <Layout title="FAQ" description="FAQ">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
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
            <h1>Frequently Asked Questions</h1>
          </div>
        </div>
        <div>
          <h3>Q: Can I use MetaMask with NiceNode light mode?</h3>
          <p>
            Light client mode is an <strong>experimental feature</strong>. Only
            use funds that you are willing to lose. Please read{" "}
            <a
              target="_blank"
              href="https://geth.ethereum.org/docs/interface/les"
              rel="noreferrer"
            >
              {`Geth's light client guide`}
              <FaExternalLinkAlt />
            </a>{" "}
            before using!
          </p>
          <h3>Q: How can I use MetaMask with NiceNode?</h3>
          <p>
            First, your node must be fully synced. Second, enable MetaMask
            connections from NiceNode {">"} Settings {">"} "Enable MetaMask
            Connections". Third, in MetaMask {">"} Add Network and enter
            "NiceNode localhost" with RPC URL "http://localhost:8545". If your
            node is running and fully sycned, the Chain ID and other fields will
            be completed by MetaMask automatically and now click Save. For
            official info from MetaMask, follow{" "}
            <a
              target="_blank"
              href="https://metamask.zendesk.com/hc/en-us/articles/360015290012-Using-a-Local-Node"
              rel="noreferrer"
            >
              {`MetaMask's local node guide`}
              <FaExternalLinkAlt />
            </a>
          </p>
        </div>
      </div>
    </Layout>
  );
}
