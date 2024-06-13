interface IMenuOption extends React.HTMLAttributes<HTMLSpanElement> {
  isActive: boolean;
}

export const MenuOption = ({ isActive, title, className }: IMenuOption) => (
  <span className={isActive ? className : ""}>{title}</span>
);
