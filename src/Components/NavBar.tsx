import { NavLink } from "react-router-dom";
import { routesLeft, routesRight } from "../Config/Config";
import { MenuOption } from "../Atoms/Elements";
import { useContext } from "react";
import { ShoppingCartContext } from "../Context";
import { CartContextType } from "../Types/Types";
import { CartIcon } from "./CartIcon";

export const NavBar = (): JSX.Element => {
  const { count } = useContext(ShoppingCartContext) || ({} as CartContextType);

  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 tx-sm font-light">
      <ul className="flex items-center gap-4">
        {routesRight.map(({ path, name }) => (
          <li key={name}>
            <NavLink to={path}>
              {({ isActive }) => (
                <MenuOption
                  isActive={isActive}
                  title={name as string}
                  className="active font-semibold underline"
                />
              )}
            </NavLink>
          </li>
        ))}
      </ul>
      <ul className="flex items-center gap-4">
        <li className="text-black/60">test@gmail.com</li>
        {routesLeft.map(({ path, name }) => (
          <li key={name}>
            <NavLink to={path}>
              {({ isActive }) => (
                <MenuOption
                  isActive={isActive}
                  className="active font-semibold underline"
                  title={name as string}
                />
              )}
            </NavLink>
          </li>
        ))}
        <li className="flex gap-2 cursor-pointer">
          {count}
          <CartIcon count={count} />
        </li>
      </ul>
    </nav>
  );
};
