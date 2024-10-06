import { template as pageTemplate } from "./view/page";
export const routes = [
  {
    path: "/",
    component: "page",
    tag: "page-view",
    title: "Page",
    template: pageTemplate,
  },
];
