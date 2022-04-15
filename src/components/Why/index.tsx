import React from "react";

import styles from "./styles.module.css";
import peopleEth from "@site/static/img/people-eth.png";

export default function Why(): JSX.Element {
  return (
    <section className={styles.features}>
      <h1>Why run a node?</h1>
      <div>
        <h2>
          Learn about the importance at{" "}
          <a href="https://ethereum.org/en/run-a-node/#what-is-a-node">
            ethereum.org
          </a>
        </h2>
        <img
          src={peopleEth}
          alt="People interacting with Ethereum"
          style={{
            maxHeight: 350,
            marginBottom: 20,
            // boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
          }}
        />
      </div>
    </section>
  );
}
