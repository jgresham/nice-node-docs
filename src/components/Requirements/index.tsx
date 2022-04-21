import React from "react";
import styles from "./styles.module.css";
import { FaMemory } from "react-icons/fa";
import { FiHardDrive } from "react-icons/fi";
import { CgEthernet } from "react-icons/cg";
import { SiSpeedtest } from "react-icons/si";
import { BsClipboardData } from "react-icons/bs";

export default function Requirements(): JSX.Element {
  return (
    <section id="requirements" className={styles.features}>
      <h1>Requirements</h1>
      <div>
        <h2>Computer</h2>
        <h3>
          <FaMemory /> 8 GB memory
        </h3>
        <h3>
          <FiHardDrive /> 1 TB SSD storage
        </h3>
        <p style={{ paddingLeft: 20 }}>2 TB to be future-proof</p>
        <h2>Internet</h2>
        <h3>
          <BsClipboardData /> Large data cap
        </h3>
        <p style={{ paddingLeft: 20 }}>
          Warning! <strong>Nodes can use large amounts of data</strong> (on the
          order of hundreds of GBs or even TBs)! Check with your Internet
          provider for data caps and overage charges.
        </p>
        <h3>
          <SiSpeedtest /> 10 Mb/s or greater speed
        </h3>
        <h3>
          <CgEthernet /> Wired internet recommended
        </h3>
      </div>
    </section>
  );
}
