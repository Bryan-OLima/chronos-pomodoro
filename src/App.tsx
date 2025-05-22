import { Heading } from "./components/Heading";

import "./styles/theme.css";
import "./styles/global.css";

import { TrashIcon } from "lucide-react";
import { Header } from "./components/Header";
import { Menu } from "./components/Menu";

export const App = () => {
  return (
    <div className="home">
      <Header />
      <Menu />

      <Heading>
        History
        <button>
          <TrashIcon />
        </button>
      </Heading>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
        laboriosam error placeat aspernatur ex voluptate voluptates mollitia,
        quibusdam magnam possimus quidem rerum esse! Explicabo repudiandae ab,
        laudantium obcaecati mollitia eveniet!
      </p>
    </div>
  );
};
