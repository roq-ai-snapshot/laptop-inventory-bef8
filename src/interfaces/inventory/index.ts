import { LaptopInterface } from 'interfaces/laptop';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface InventoryInterface {
  id?: string;
  laptop_id: string;
  company_id: string;
  quantity: number;
  status: string;
  created_at?: any;
  updated_at?: any;

  laptop?: LaptopInterface;
  company?: CompanyInterface;
  _count?: {};
}

export interface InventoryGetQueryInterface extends GetQueryInterface {
  id?: string;
  laptop_id?: string;
  company_id?: string;
  status?: string;
}
