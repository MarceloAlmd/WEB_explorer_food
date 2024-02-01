export interface DishesProps {
  title: string;
  description: string;
  price: string | number;
  favorite?: string | number;
  showDetails?: React.MouseEventHandler<HTMLDivElement> | undefined;
  img?: string;
  onEdit?: () => void;
  removeFavorite?: () => void;
  addFavorite?: () => void;
}
