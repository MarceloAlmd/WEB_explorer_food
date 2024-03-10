export interface ingredientsTypes {
  created_at: string;
  dishes_id: number;
  id: number;
  image: string;
  name: string;
  updated_at: string;
  user_id: number;
}
export interface DetailsTypes {
  category: string;
  created_at: string;
  description: string;
  id: number;
  image: string;
  ingredient: ingredientsTypes[];
  isFavorite: boolean;
  name: string;
  price: string;
  updated_at: string;
  user_id: number;
}
