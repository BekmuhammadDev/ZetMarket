import { FC } from 'react';
import './_style.scss';
import { FilterHeader } from '@/components/ui';
import { DataTable } from '@components';
import { newOrderColumns } from '@/components/data-table/new-order';
import { TableData } from '@/constants/index.data';


const index: FC = () => {
  return (
  <section>
    <FilterHeader/>
    <DataTable columns={newOrderColumns} dataSource={TableData}/>
  </section>
  );
};

export default index;
