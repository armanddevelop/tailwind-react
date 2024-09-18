import { ReactElement } from "react";
import { RoutesType } from "../Types/Types";
import { Home, MyAccount, MyOrder, MyOrders, SingIn, NotFound } from "../Pages";
import { useRoutes } from "react-router-dom";

export const AppRoutes = (): ReactElement | null => {
  const configRoutes: RoutesType = [
    {
      path: "/",
      name: "Home",
      element: <Home />,
    },
    {
      path: "/my-account",
      name: "My Account",
      element: <MyAccount />,
    },
    {
      path: "/my-order",
      name: "My Order",
      element: <MyOrder />,
    },
    {
      path: "/my-orders",
      name: "My Orders",
      element: <MyOrders />,
    },
    {
      path: "/my-orders/last",
      name: "My Order Last",
      element: <MyOrder />,
    },
    {
      path: "/sign-in",
      name: "SingIn",
      element: <SingIn />,
    },
    {
      path: "/*",
      element: <NotFound />,
    },
  ];
  const routes = useRoutes(configRoutes);
  return routes;
};
