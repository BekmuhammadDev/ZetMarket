import React from 'react';
import { useNavigate } from 'react-router';
import type { PopconfirmProps } from 'antd';
import { PoweroffOutlined } from '@ant-design/icons';
import { Button, message, Popconfirm } from 'antd';
import './_style.scss';

const LogOutButton: React.FC = () => {
  const navigate = useNavigate();

  const confirm: PopconfirmProps['onConfirm'] = (e) => {
    console.log(e);
    message.success('Click on Yes');
    navigate('/login');
    localStorage.clear();
  };

  const cancel: PopconfirmProps['onCancel'] = (e) => {
    console.log(e);
    message.error('Click on No');
  };

  return (
    <Popconfirm
      title="Delete the task"
      description="Are you sure to delete this task?"
      onConfirm={confirm}
      onCancel={cancel}
      okText="Yes"
      cancelText="No"
      placement="bottom"
    >
      <Button
        type="primary"
        icon={<PoweroffOutlined />}
        onClick={() => console.log('logout')}
        className="logout"
      >
        <span>LOGOUT</span>
      </Button>
    </Popconfirm>
  );
};

export default LogOutButton;
