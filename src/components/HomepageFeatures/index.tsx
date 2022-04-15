import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  imgSrc: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Easy to use",
    imgSrc: require("@site/static/img/doge-computer.png").default,
    description: (
      <>
        NiceNode was designed to make it as easy as possible to run an Ethereum
        node. Download, open the app, and click to start the node. That's all
        that is required.
      </>
    ),
  },
  {
    title: "Clear controls",
    imgSrc: require("@site/static/img/desktop-eth.png").default,
    description: (
      <>
        Easy to understand controls are built into NiceNode. Run a node how you
        want it to without having to type commands into a terminal.
      </>
    ),
  },
  {
    title: "Live monitoring",
    imgSrc: require("@site/static/img/dao-2.png").default,
    description: (
      <>
        NiceNode shows what the node is doing at a glance. Stats like how many
        peer nodes are connected and synching progress are built into the app.
      </>
    ),
  },
];

function Feature({ title, imgSrc, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img
          src={imgSrc}
          alt="People interacting with Ethereum"
          // style={{
          //   maxHeight: 350,
          //   marginBottom: 20,
          //   // boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
          // }}
          className={styles.featureImg}
        />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
