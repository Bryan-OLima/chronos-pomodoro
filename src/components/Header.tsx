import { TimerIcon } from "lucide-react";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <>
      <div className={styles.header}>
        <TimerIcon size={55} />
        <span>Chronos</span>
      </div>
    </>
  );
};
