import React from "react";
import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";
import Link from "@docusaurus/Link";
import styles from "../index.module.css";
import { FaExternalLinkAlt, FaLinux } from "react-icons/fa";
import faqJson from "@site/static/js/faq.json";

const DEFAULT_RELEASE_VERSION = "0.8.0-alpha";

export default function FAQs() {
  return (
    <Layout title="FAQ" description="FAQ">
      <Head>
        <script type="application/ld+json">{JSON.stringify(faqJson)}</script>
      </Head>
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
        <div style={{ padding: "50px" }}>
          <h2>
            What are the benefits of running our own nodes? What do I get out of
            this?
          </h2>
          <p>
            In general, some of the benefits of running our own node are quoted
            as “preserving privacy, security, reduced reliance on third-party
            servers, censorship resistance and improved health and
            decentralization of the network.”
          </p>
          <p>
            Running a node is purely altruistic, so there are no financial
            rewards by running one!
          </p>
          <p>
            Read more about it{" "}
            <a
              target="_blank"
              href="https://ethereum.org/en/developers/docs/nodes-and-clients/#why-should-i-run-an-ethereum-node"
              rel="noreferrer"
            >
              {`here `}
              <FaExternalLinkAlt />
            </a>
          </p>
          <h2>Can I only run Ethereum nodes with this?</h2>
          <p>
            Yes, NiceNode only supports Ethereum node clients.
          </p>
          <h2>Do I need 32 ETH to run a node?</h2>
          <p>
            You don’t need 32 ETH to run a node. As long as you have the
            hardware that fulfills the minimum requirements, you’re able to run
            your own full node at home!
          </p>
          <h2>What types of nodes do you support?</h2>
          <p>
            NiceNode currently supports full (snap sync mode by default) and
            light nodes. Archive node is planned to be supported in the future.
          </p>
          <p>
            Read more about the different types of nodes{" "}
            <a
              target="_blank"
              href="https://ethereum.org/en/developers/docs/nodes-and-clients/#node-types"
              rel="noreferrer"
            >
              {`here `}
              <FaExternalLinkAlt />
            </a>
          </p>
          <p>
            See a{" "}
            <a
              target="_blank"
              href="https://twitter.com/SirJohnsGresham/status/1524805330726621184?s=20&t=L0V7fA7IBEYK64zY6CeCow"
              rel="noreferrer"
            >
              {`screenshot `}
              <FaExternalLinkAlt />
            </a>{" "}
            of some other nodes NiceNode would like to support!
          </p>
          <h2>
            I don’t meet the requirements to run my own node. What can I do?
          </h2>
          <p>
            Even if you don’t meet the requirements, you might be able to run
            your own light node with NiceNode! However, because it is still an
            experimental feature, please only try it with funds you are willing
            to lose.
          </p>
          <h2>How long will it take to sync my node?</h2>
          <p>
            Full node may take a few days to sync, depending on your bandwidth
            and hardware, and a light node may take a few minutes to fully sync.
          </p>
          <h2>Can I use MetaMask with NiceNode light mode?</h2>
          <p>
            Light client mode is an <strong>experimental feature</strong>. Only
            use funds that you are willing to lose. Please read{" "}
            <a
              target="_blank"
              href="https://geth.ethereum.org/docs/interface/les"
              rel="noreferrer"
            >
              {`Geth's light client guide `}
              <FaExternalLinkAlt />
            </a>{" "}
            before using!
          </p>
          <h2>How can I use MetaMask with NiceNode?</h2>
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
              {`MetaMask's local node guide `}
              <FaExternalLinkAlt />
            </a>
          </p>
          <h2>
            Are there any plans to support consensus layer nodes? What other
            nodes will you support?
          </h2>
          <p>
            Yes, consensus/beacon nodes will be implemented next, however,
            validation/staking has not been decided on yet. There will need to
            be extensive auditing before committing to doing so. Layer 2 nodes
            will also be supported eventually!
          </p>
          <p>
            See a{" "}
            <a
              target="_blank"
              href="https://twitter.com/SirJohnsGresham/status/1524805330726621184?s=20&t=L0V7fA7IBEYK64zY6CeCow"
              rel="noreferrer"
            >
              {`screenshot `}
              <FaExternalLinkAlt />
            </a>{" "}
            of some other nodes NiceNode would like to support!
          </p>
          <h2>How does NiceNode differ from DAppNode?</h2>
          <p>
            DAppNode requires users to install a new Operating System, but
            NiceNode works with what’s installed on your computer right now.
            Once you download, and run NiceNode, you’re good to go!
          </p>
          <p>
            For other differences, please see{` `}
            <a target="_blank" href="https://dappnode.io/" rel="noreferrer">
              {`https://dappnode.io/ `}
              <FaExternalLinkAlt />
            </a>{" "}
            for additional DAppNode information.
          </p>
          <h2>I have more questions!</h2>
          <p>
            Feel free to come to the NiceNode discord with your questions 🙂
          </p>
        </div>
      </div>
    </Layout>
  );
}
