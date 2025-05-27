import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';
import { useState, useEffect } from 'react';
import styles from './styles.module.css';

type AvaibleThemes = 'dark' | 'light';

export const Menu = () => {
  const [theme, setTheme] = useState<AvaibleThemes>('dark');

  const handleThemeChange = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault(); // Não segue o link

    setTheme((prevTheme) => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
      return nextTheme;
    });
  };

  // useEffect(() => {
  //   console.log('useEffect sem Dependencia', Date.now());
  // }); // é executado toda vez que o componente renderiza na tela

  // useEffect(() => {
  //   console.log('useEffect com array dependecies vazio', Date.now());
  // }, []); //executa apenas quando o react monta o componente na tela pela primeira vez

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);

    return () => {
      console.log('this component will be refreshed');
    };
  }, [theme]); // executa apenas quando o valor da variavel informada muda

  return (
    <nav className={styles.menu}>
      <a
        href="#"
        className={styles.menuLink}
        aria-label="Go to Home"
        title="Go to Home"
      >
        <HouseIcon />
      </a>
      <a
        href="#"
        className={styles.menuLink}
        aria-label="Go to History"
        title="Go to History"
      >
        <HistoryIcon />
      </a>
      <a
        href="#"
        className={styles.menuLink}
        aria-label="Go to Settings"
        title="Go to Settings"
      >
        <SettingsIcon />
      </a>
      <a
        href="#"
        className={styles.menuLink}
        aria-label="Change Theme"
        title="Change Theme"
        onClick={(e) => handleThemeChange(e)}
      >
        <SunIcon />
      </a>
    </nav>
  );
};
