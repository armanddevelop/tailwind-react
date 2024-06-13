import { ReactElement } from "react";

interface ILayout extends React.PropsWithChildren {
  children: ReactElement;
}
export const Layout = ({ children }: ILayout): JSX.Element => {
  return <div className="flex flex-col mt-20 items-center">{children}</div>;
};
