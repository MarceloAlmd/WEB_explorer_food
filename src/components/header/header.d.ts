export interface HeaderProps {
  isSearch?: boolean;
  searchDishes?: Dispatch<SetStateAction<string>>;
}

export type ItemStatusTypes = "pending" | "preparing" | "delivered";
export interface Status {
  pending: string;
  preparing: string;
  delivered: string;
}

export interface RequestsTypes {
  code: string;
  created_at: string;
  detailing: string;
  id: number;
  status: Status;
  updated_at: string;
  user_id: number;
}
