import { BrowserRouter, useRoutes } from "react-router-dom";
import { CatalogsProvider } from "../../context/CatalogsProvider";
import Navbar from "../../components/Navbar";
import { Home } from "../Home";
import { Info } from "../Info";
import { NotFound } from "../NotFound";
import "./App.css";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/info", element: <Info /> },
    { path: "/*", element: <NotFound /> },
  ]);

  return routes;
};

const App = () => {
  return (
    <CatalogsProvider>
      <BrowserRouter>
        <Navbar />
        <AppRoutes />
      </BrowserRouter>
    </CatalogsProvider>
  );
};

export default App;
