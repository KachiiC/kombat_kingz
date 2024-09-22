import { FC } from "react";
import "./App.css";
import { Router } from "./router";
import { RouterProvider } from "react-router-dom";

const App: FC = () => {
  return <RouterProvider router={Router} />;
};

export default App;
