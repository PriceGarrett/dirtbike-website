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
      element: <PageContent contentPath={"content/" + element.contentPath} />,
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
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Layout />}>
    //       <Route index element={<Home />} />
    //       <Route
    //         path="buying"
    //         element={<PageContent contentPath="Buying_New.md" />}
    //       />
    //       <Route
    //         path="ready"
    //         element={<PageContent contentPath="Buying_New.md" />}
    //       />
    //       <Route
    //         path="care"
    //         element={<PageContent contentPath="Buying_New.md" />}
    //       />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
    <RouterProvider router={router} />
  );
}
//import the rehype class names to allow for styling of created nodes

export default App;
