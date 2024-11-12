import {FC} from 'react'
import { ITableDataType } from '@ttypes'
import type { PopconfirmProps } from 'antd';
import { Button, message, Popconfirm } from 'antd';



 const index:FC<ITableDataType> = ({id}) => {

  
const confirm: PopconfirmProps['onConfirm'] = (e) => {
  console.log(e);
  message.success(`Click on Yes ${id}`);
};

const cancel: PopconfirmProps['onCancel'] = (e) => {
  console.log(e);
  message.error('Click on No');
};

  return  (  
  <Popconfirm
  title="Confirm order"
  description="Are you sure to delete this task?"
  onConfirm={confirm}
  onCancel={cancel}
  okText="Yes"
  cancelText="No"
>
<Button type='primary'>Coonfirm</Button>
</Popconfirm>
)
}

export default index;