import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { AppRoutes } from "../../Components/AppRoutes";
import { NavBar } from "../../Components/NavBar";

export const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <NavBar />
      <AppRoutes />
    </BrowserRouter>
  );
};
