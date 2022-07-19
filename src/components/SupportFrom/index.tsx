import React from "react";

import styles from "./styles.module.css";
import gitcoin from "@site/static/img/gitcoin-white.png";
import ethStaker from "@site/static/img/EthStaker-white.png";

export default function SupportFrom(): JSX.Element {
  return (
    <section className={styles.features}>
      <h1 style={{color: 'white'}}>Support from</h1>
      <div style={{textAlign: 'center'}}>
        <img
          src={gitcoin}
          alt="People interacting with Ethereum"
          style={{
            maxHeight: 100,
            maxWidth: 200,
            margin: 20,
            // boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
          }}
        />
        <img
          src={ethStaker}
          alt="People interacting with Ethereum"
          style={{
            maxHeight: 100,
            maxWidth: 200,
            margin: 20,
            // boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
          }}
        />
      </div>
    </section>
  );
}
