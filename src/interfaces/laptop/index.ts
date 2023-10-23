import { InventoryInterface } from 'interfaces/inventory';
import { PurchaseInterface } from 'interfaces/purchase';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface LaptopInterface {
  id?: string;
  model: string;
  manufacturer: string;
  price: number;
  quantity: number;
  company_id: string;
  created_at?: any;
  updated_at?: any;
  inventory?: InventoryInterface[];
  purchase?: PurchaseInterface[];
  company?: CompanyInterface;
  _count?: {
    inventory?: number;
    purchase?: number;
  };
}

export interface LaptopGetQueryInterface extends GetQueryInterface {
  id?: string;
  model?: string;
  manufacturer?: string;
  company_id?: string;
}
