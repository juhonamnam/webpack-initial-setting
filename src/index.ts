import { element } from "./util";
import "./style.css";

const app = () => {
  return element({
    name: "main",
    children: [
      element({
        name: "h1",
        children: ["Welcome to Webpack Application!!"],
      }),
      element({
        name: "a",
        props: {
          href: "#",
        },
        events: [["click", () => alert("Hello World")]],
        children: ["Click"],
      }),
    ],
  });
};

document.body.appendChild(app());
