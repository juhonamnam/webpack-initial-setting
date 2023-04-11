import { createElement } from "./util";
import "./style.css";

const renderBody = () => {
  const main = createElement({
    name: "main",
    children: [
      createElement({
        name: "h1",
        children: ["Welcome to Webpack Application!!"],
      }),
      createElement({
        name: "a",
        props: {
          href: "#",
        },
        events: [["click", () => alert("Hello World")]],
        children: ["Click"],
      }),
    ],
  });

  document.body.appendChild(main);
};

renderBody();
