interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Guest'],
  tenantRoles: ['Owner', 'Inventory Manager', 'IT Staff', 'Finance Manager', 'End Customer'],
  tenantName: 'Company',
  applicationName: 'laptop inventory application',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['View laptop details', 'View company details', 'View inventory status', 'View purchase status'],
  ownerAbilities: ['Manage users', 'Manage companies', 'Manage laptops', 'Manage finances'],
  getQuoteUrl: 'https://roq-wizzard-git-qa03-roqtech.vercel.app/proposal/0f75f745-e46f-4071-b0d6-76d02f1014a0',
};
