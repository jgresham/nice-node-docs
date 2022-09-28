import React from "react";

import styles from "./styles.module.css";
import gitcoin from "@site/static/img/gitcoin-white.png";
import ethStaker from "@site/static/img/EthStaker-white.png";
import CityDaoLogo from "@site/static/img/cityDAOLogo.svg";

export default function SupportFrom(): JSX.Element {
  return (
    <section className={styles.features}>
      <h1 style={{color: 'white'}}>Support from</h1>
      <div style={{textAlign: 'center',
       paddingLeft: 10, paddingRight: 10}}>
        <a 
          href="https://www.citydao.io/"
          target="_blank">
            <CityDaoLogo style={{maxWidth: 300}}/>
        </a>
      </div>
      <div style={{textAlign: 'center'}}>
        <a 
          href="https://gitcoin.co/grants/5959/nicenode-run-a-node-just-press-start"
          target="_blank">
            <img
              src={gitcoin}
              alt="Gitcoin logo"
              style={{
                maxHeight: 100,
                maxWidth: 200,
                margin: 20,
              }}
            />
        </a>
        <a 
          href="https://qf.ethstaker.cc/#/project/0x223e89f10a3016a2aba4a5b13e9436ea63452cac1c76f0bc8644242e3c9fc584"
          target="_blank">
            <img
              src={ethStaker}
              alt="EthStaker logo"
              style={{
                maxHeight: 100,
                maxWidth: 200,
                margin: 20,
              }}
            />
        </a>
      </div>
    </section>
  );
}
