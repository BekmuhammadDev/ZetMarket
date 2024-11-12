export interface TnavigationType {
  path: string;
  title: string;
  icon: string;
  role?: string[];
}

export type TCardPropsType = {
  icon: string;
  title: string;
  value: number | string;
  color: string;
};

export interface ITableDataType {
  key: React.Key | string | number;
  id: string | number;
  date:string;
  fullname: string;
  phonenumber: string;
  productname: string;
  quantity: number;
  totalprice: number;
  status: string;
  paymentmethod: string;
  age: number;
  address: string;
}
