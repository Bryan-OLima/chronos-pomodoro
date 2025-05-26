import styles from "./styles.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a href="">Learn how to Pomodoro works.</a>
      <a href="">
        Chronos Pomodoro &copy; {new Date().getFullYear()} - Made with ❤️
      </a>
    </footer>
  );
};
