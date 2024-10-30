import React from 'react';
import { Space, Switch } from 'antd';
import { useDispatch } from 'react-redux';
import { toogleAside } from '../../../stores/toogle-slice';

const index: React.FC = () => {
  const dispatch = useDispatch();

  const toogleAsideHandler = () => {
    dispatch(toogleAside());
  };

  return (
    <Space direction="vertical">
      <Switch
        onChange={toogleAsideHandler}
        checkedChildren="open"
        unCheckedChildren="close"
        defaultChecked
      />
    </Space>
  );
};

export default index;
