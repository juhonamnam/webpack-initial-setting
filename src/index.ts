import { element } from "./util";
import "./style.css";

const app = () => {
  return element({
    tag: "div",
    props: {
      className: "App",
    },
    children: [
      element({
        tag: "header",
        props: {
          className: "App-header",
        },
        children: [
          element({
            tag: "img",
            props: {
              src: "static/webpack-original.svg",
              alt: "logo",
              className: "App-logo",
            },
          }),
          element({
            tag: "p",
            children: [
              "Edit ",
              element({
                tag: "code",
                children: ["src/index.ts"],
              }),
              " and save to reload",
            ],
          }),
          element({
            tag: "a",
            props: {
              className: "App-link",
              href: "https://webpack.js.org/",
              target: "_blank",
              rel: "noopener noreferrer",
            },
            children: ["Learn Webpack"],
          }),
        ],
      }),
    ],
  });
};

document.body.appendChild(app());
