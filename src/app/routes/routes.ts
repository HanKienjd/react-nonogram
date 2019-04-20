import { Home } from "Pages/home";
import { LevelPage } from "Pages/level";
import { Levels } from "Pages/levels";
import { NotFound } from "Pages/notFound";

export const routes = [
  {
    component: Home,
    exact: true,
    path: "/",
  },
  {
    component: LevelPage,
    path: "/category/:categoryId/level/:levelId",
  },
  {
    component: Levels,
    path: "/category/:categoryId",
  },
  {
    component: NotFound,
    path: "*",
  },
];
