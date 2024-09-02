import { Button, Checkbox, Form, Input } from 'antd';
import { login } from '@/api/login';
import { useEffect } from 'react';
const Login = () => {
  const [form] = Form.useForm();
  const getForm = async () => {
    let params = form.getFieldsValue();
    let [err, res] = await login(params);
    console.log(err, res);
  };
  useEffect(() => {
    form.setFieldsValue({ username: 'admin', password: '123456' });
    console.log(form, '渲染完成');
  });
  return (
    <div style={{ width: '80%', margin: '100px auto' }}>
      <Form name="basic" form={form} labelCol={{ span: 4 }} wrapperCol={{ span: 16 }} initialValues={{ remember: true }}>
        <Form.Item
          label="用户名"
          name="username"
          rules={[
            {
              required: true,
              message: '请输入用户名'
            }
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="密码"
          name="password"
          rules={[
            {
              required: true,
              message: '请输入密码'
            }
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16
          }}
        >
          <Checkbox>记住我</Checkbox>
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16
          }}
        >
          <Button type="primary" onClick={getForm}>
            提交
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default Login;
