import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { AppRoutes } from "../../Components/AppRoutes";
import { NavBar } from "../../Components/NavBar";
import { ShoopingCardProvider } from "../../Context";
import { CheckoutSideMenu } from "../../Components/CheckoutSideMenu";

export const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <ShoopingCardProvider>
        <NavBar />
        <AppRoutes />
        <CheckoutSideMenu />
      </ShoopingCardProvider>
    </BrowserRouter>
  );
};
