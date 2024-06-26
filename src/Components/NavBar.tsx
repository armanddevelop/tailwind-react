import { NavLink } from "react-router-dom";
import { routesLeft, routesRight } from "../Config/Config";
import { MenuOption } from "../Atoms/Elements";
import { useContext } from "react";
import { ShoppingCartContext } from "../Context";

export const NavBar = (): JSX.Element => {
  const { count } = useContext(ShoppingCartContext);
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
        <li className="flex gap-2">
          {count}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#5f6368"
          >
            <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" />
          </svg>
        </li>
      </ul>
    </nav>
  );
};
