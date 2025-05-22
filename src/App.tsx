import { Heading } from "./components/Heading";

import "./styles/theme.css";
import "./styles/global.css";

import { TrashIcon } from "lucide-react";

export const App = () => {
  return (
    <>
      <Heading>
        Hello world!
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
    </>
  );
};
