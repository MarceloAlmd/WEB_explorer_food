export interface DishesProps {
  title: string;
  description: string;
  price: string | number;
  favorite?: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
  img?: string;
}
