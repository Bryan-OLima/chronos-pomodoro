import type React from "react";
import styles from "./Button.module.css";

type ButtonProps = {
  children: React.ReactNode;
  link: string;
  isNight?: boolean;
};

export const Button = ({ children, link }: ButtonProps) => {
  return (
    <a href={link}>
      <button className={styles.button}>{children}</button>
    </a>
  );
};
