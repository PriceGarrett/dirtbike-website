import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
  createHashRouter,
} from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import PageContent from "./components/PageContent";
import { Heirarchy } from "./Heirarchy";

function flattenHeirarchy(structure) {
  var pages = [];
  structure.forEach((element) => {
    var children = [];
    if (element.submenu) {
      pages = pages.concat(flattenHeirarchy(element.submenu));
    }
    pages.push({
      path: element.route,
      element: element.component,
    });
  });

  return pages;
}

const router = createHashRouter([{
  element: <Layout/>,
  children: flattenHeirarchy(Heirarchy),
}
  

]);

function App() {
  console.log(router);
  return (
    <RouterProvider router={router} />
  );
}
//import the rehype class names to allow for styling of created nodes

export default App;
