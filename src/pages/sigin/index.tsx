import { FC } from 'react';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Button, Input, Form } from 'antd';
import type { FormProps } from 'antd';
import { useAuth } from '../../services/auth';
import './_style.scss';

const index: FC = () => {
  type FieldType = {
    username: string;
    password: string;
  };

 
  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (
    errorInfo
  ) => {
    console.log('Failed:', errorInfo);
  };


  const onFinish: FormProps<FieldType>['onFinish'] = (values: FieldType) => {
    useAuth.signin(values).then((res:any)=>{
      localStorage.setItem('token', res.data.token);
      if (res.status ===200) {
        window.location.href = '/';
      }
    })
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
              name="username"
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
