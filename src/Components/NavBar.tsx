import { NavLink } from "react-router-dom";
import { routesLeft, routesRight } from "../Config/Config";
import { ActiveElement } from "../Atoms/Elements";

export const NavBar = (): JSX.Element => {
  return (
    <nav className="flex justify-between items-center fixed z-10 w-full py-5 px-8 tx-sm font-light">
      <ul className="flex items-center gap-4">
        {routesRight.map(({ path, name }) => (
          <li key={name}>
            <NavLink to={path}>
              {({ isActive }) => (
                <ActiveElement
                  isActive={isActive}
                  title={name as string}
                  className="active font-semibold"
                />
              )}
            </NavLink>
          </li>
        ))}
      </ul>
      <ul className="flex items-center gap-4">
        {routesLeft.map(({ path, name }) => (
          <li key={name}>
            <NavLink to={path}>
              {({ isActive }) => (
                <ActiveElement
                  isActive={isActive}
                  className="active font-semibold"
                  title={name as string}
                />
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
