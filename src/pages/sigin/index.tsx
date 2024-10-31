import { FC } from 'react';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Button, Input, Form } from 'antd';
import { FormProps } from 'antd';

import './_style.scss';

const index: FC = () => {
  type FieldType = {
    phone?: string;
    password?: string;
  };

  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (
    errorInfo
  ) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <section id="authorization">
      <div className="wrapper">
        <div className="form">
          <div className="logo">
            <img src="./z.png" alt="logo" />
            <h2>Zetmarket B2B</h2>
          </div>

          <Form
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item<FieldType>
              name="phone"
              rules={[
                { required: true, message: 'Please input your username!' },
              ]}
            >
              <Input
                placeholder="input username"
                type="text"
                size="large"
                style={{ height: '50px', marginBottom: '15px' }}
              />
            </Form.Item>

            <Form.Item<FieldType>
              name="password"
              rules={[
                { required: true, message: 'Please input your password!' },
              ]}
            >
              <Input.Password
                placeholder="input password"
                size="large"
                style={{ height: '50px' }}
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default index;
