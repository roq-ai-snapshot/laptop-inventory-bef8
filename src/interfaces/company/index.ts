import { FinanceInterface } from 'interfaces/finance';
import { InventoryInterface } from 'interfaces/inventory';
import { LaptopInterface } from 'interfaces/laptop';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CompanyInterface {
  id?: string;
  description?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  finance?: FinanceInterface[];
  inventory?: InventoryInterface[];
  laptop?: LaptopInterface[];
  user?: UserInterface;
  _count?: {
    finance?: number;
    inventory?: number;
    laptop?: number;
  };
}

export interface CompanyGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
