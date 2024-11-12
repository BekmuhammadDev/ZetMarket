import { Button, Flex } from 'antd';
import type { TableColumnsType } from 'antd';
import type { ITableDataType } from '@ttypes';
import { ClipboardButton, PartnerLogo, Status } from '@ui';
import { Link } from 'react-router-dom';



export const CompletedOrderColumns: TableColumnsType<ITableDataType> = [
  {
    title: 'No',
    dataIndex: 'id',
  },
  {
    title: 'Date',
    dataIndex: 'date'
  },
  {
    title: 'Full Name',
    dataIndex: 'fullname',
    render: (_, record) => {
      return (
        <Flex gap={6}>
          <span>{record.fullname}</span>
          <ClipboardButton text={record.fullname}/>
        </Flex>
      )
    }
  },
  {
    title: 'Phone Number',
    dataIndex: 'phonenumber',
    render: (_, record) => {
      return (
        <Flex gap={6}>
          <span>{record.phonenumber}</span>
          <ClipboardButton text={record.phonenumber}/>
        </Flex>
      )
    }
  },
  {
    title: 'Address',
    dataIndex: 'address',
    render: (_, record) => {
      return (
        <Flex gap={6}>
          <span>{record.address}</span>
          <ClipboardButton text={record.address}/>
        </Flex>
      )
    }
  },
  {
    title: 'Product Name',
    dataIndex: 'productname',
    render: (_, record) => {
      return (
        <Flex gap={6}>
          <span>{record.productname}</span>
          <ClipboardButton text={record.productname}/>
        </Flex>
      )
    }
  },
  {
    title: 'Quantity',
    dataIndex: 'quantity',
    render: (_, record) => {
      return (
        <Flex gap={6}>
          <span>{record.quantity}</span>
          <ClipboardButton text={record.quantity}/>
        </Flex>
      )
    }
  },
  {
    title: 'Total Price',
    dataIndex: 'totalprice',
    render: (_, record) => {
      return (
        <Flex gap={6}>
          <span>{record.totalprice}</span>
          <ClipboardButton text={record.totalprice}/>
        </Flex>
      )
    }
  },
  {
    title: 'Payment Method',
    dataIndex: 'paymentmethod',
    render:(_,record)=>{
      return <PartnerLogo type={record.paymentmethod}/>
    }
  },
  {
    title: 'Status',
    dataIndex: 'status',
    render:(_,record)=>{
      return  <Status type={record.status}/>;
    }
  },
  {
    title: 'Action',
    key: 'action',
    render: (_) => (
      <Flex gap={3}>
        <Button color='default' variant='outlined'>
        <Link to='/'><i className='bi bi-three-dots-vertical'></i></Link>
        </Button>
      </Flex>
    ),
  }
];



