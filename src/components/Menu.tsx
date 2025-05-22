import { HistoryIcon, HomeIcon, SettingsIcon, SunIcon } from "lucide-react";
import { Button } from "./Button";

import styles from "./Menu.module.css";

export const Menu = () => {
  return (
    <div className={styles.menu}>
      <Button link="#">
        <HomeIcon size={27} />
      </Button>

      <Button link="#">
        <HistoryIcon size={27} />
      </Button>

      <Button link="#">
        <SettingsIcon size={27} />
      </Button>
      <Button link="#">
        <SunIcon size={27} />
      </Button>
    </div>
  );
};
