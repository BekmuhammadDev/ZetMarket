import { FC } from 'react';
import { FilterHeader } from '@/components/ui';
import { DataTable } from '@components';
import { TableData } from '@/constants/index.data';
import { CompletedOrderColumns } from '@/components/data-table/completed-order';
import './_style.scss';

const index: FC = () => {
  return <section>
    <FilterHeader />
    <DataTable columns={CompletedOrderColumns} dataSource={TableData} />
  </section>;
};

export default index;
