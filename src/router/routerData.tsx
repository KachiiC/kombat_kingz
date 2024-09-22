import { About } from "../pages/About";
import { Event } from "../pages/Event";
// import { Home } from "../pages/Home";
import { League } from "../pages/League";
import { Podcast } from "../pages/Podcast";

export const routerData = [
  {
    path: "/",
    element: <Podcast />
  },
  {
    path: "about",
    element: <About />
  },
  {
    path: "league",
    element: <League />
  },
  {
    path: "podcast",
    element: <Podcast />
  },
  {
    path: "Event",
    element: <Event />
  },
];
