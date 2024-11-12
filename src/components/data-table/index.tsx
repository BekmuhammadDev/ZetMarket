import React from 'react';
import { Table } from 'antd';
import type { ITableDataType } from '@ttypes';

interface IPropType {
  columns:any;
  dataSource: ITableDataType[];
}


const DataTable: React.FC<IPropType> = ({columns,dataSource}) => (
  <>
    <Table<ITableDataType> 
    columns={columns} 
    dataSource={dataSource}  
    size="middle" 
    style={{borderRadius:'20px'}}
    />
  </>
);

export default DataTable;