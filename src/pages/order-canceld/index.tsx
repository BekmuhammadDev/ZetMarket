import { FC } from 'react';
import { FilterHeader } from '@/components/ui';
import { DataTable } from '@components';
import { TableData } from '@/constants/index.data';
import './_style.scss';
import { CanceldOrderColumns } from '@/components/data-table/canceld-order';

const index: FC = () => {
  return <section>
    <FilterHeader />
    <DataTable columns={CanceldOrderColumns} dataSource={TableData} />
  </section>;
};

export default index;
