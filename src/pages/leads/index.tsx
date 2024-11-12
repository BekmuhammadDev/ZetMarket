import { FC } from 'react';
import { FilterHeader } from '@/components/ui';
import { DataTable } from '@components';
import { TableData } from '@/constants/index.data';
import { LeadsOrderColumns } from '@/components/data-table/leads-order';
import './_style.scss';

const index: FC = () => {
  return <section>
    <FilterHeader />
    <DataTable columns={LeadsOrderColumns} dataSource={TableData} />
  </section>;
};

export default index;
