import { FC } from "react";
import Button from "../UI/Button";

import styles from "./ResultsTitle.module.css";

const ResultsTitle: FC<{ date: Date }> = (props) => {
  const { date } = props;

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <section className={styles.title}>
      <h1>Events in {humanReadableDate}</h1>
      <Button link="/events">Show all events</Button>
    </section>
  );
};

export default ResultsTitle;
