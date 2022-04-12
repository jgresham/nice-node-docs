import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Easy to use",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
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
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Easy to understand controls are built into NiceNode. Run a node how you
        want it to without having to type commands into a terminal.
      </>
    ),
  },
  {
    title: "Live monitoring",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        NiceNode shows what the node is doing at a glance. Stats like how many
        peer nodes are connected and synching progress are built into the app.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
