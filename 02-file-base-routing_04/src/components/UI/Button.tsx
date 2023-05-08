import { FC, ReactNode } from "react";
import Link from "next/link";

import styles from "./Button.module.css";

const Button: FC<{
  link?: string | null;
  children: ReactNode;
}> = (props) => {
  if (props.link) {
    return (
      <Link className={styles.btn} href={props.link}>
        {props.children}
      </Link>
    );
  }

  return (
    <button className={styles.btn}>
      {props.children}
    </button>
  );
};

export default Button;
