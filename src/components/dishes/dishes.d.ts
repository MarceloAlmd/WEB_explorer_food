export interface DishesProps {
  title: string;
  description: string;
  price: string | number;
  favorite?: boolean;
  showDetails?: React.MouseEventHandler<HTMLDivElement> | undefined;
  img?: string;
  onEdit?: () => void;
}
