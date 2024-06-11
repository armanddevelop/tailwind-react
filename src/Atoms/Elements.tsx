interface ISpanElement extends React.HTMLAttributes<HTMLSpanElement> {
  isActive: boolean;
}

export const ActiveElement = ({ isActive, title, className }: ISpanElement) => (
  <span className={isActive ? className : ""}>{title}</span>
);
