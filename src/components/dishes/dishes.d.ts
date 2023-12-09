export interface DishesProps {
  title: string;
  description: string;
  price: string | number;
  isFavorite?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
}
