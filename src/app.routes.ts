import { Route } from "@veryan/lit-spa";
import { html } from "lit";
import { Tab } from "./models";


export const routes: Route[] = [
    {
      name: "home",
      pattern: ["", ...Object.keys(Tab)],
      component: () =>
        import("./pages/home/home").then(() => html`<portfolio-home></portfolio-home>`),
    },
    {
      name: "not-found",
      pattern: "*",
      component: () =>
        import("./pages/404/404").then(() => html`<not-found></not-found>`),
    },
  ];