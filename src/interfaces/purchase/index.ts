import { UserInterface } from 'interfaces/user';
import { LaptopInterface } from 'interfaces/laptop';
import { GetQueryInterface } from 'interfaces';

export interface PurchaseInterface {
  id?: string;
  user_id: string;
  laptop_id: string;
  quantity: number;
  total_price: number;
  status: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  laptop?: LaptopInterface;
  _count?: {};
}

export interface PurchaseGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  laptop_id?: string;
  status?: string;
}
