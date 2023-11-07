import { CategoryProps } from "./category";
import * as Styles from "./category.styles";

export function Category({ title, children }: CategoryProps) {
  return (
    <Styles.Container>
      <h2>{title}</h2>
      {children}
    </Styles.Container>
  );
}
