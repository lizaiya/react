import { Button, Checkbox, Form, Input, Spin } from 'antd';
import { getCode } from '@/api/login';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserInfo } from '@/store/modules/userStore';
import './login.less';
const Login = () => {
  const [form] = Form.useForm();
  const [codeImg, setCodeImg] = useState('');
  const [loading, setLoading] = useState(true);
  const [captchaId, setCaptchaId] = useState(true);
  const { userInfo } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const getForm = async () => {
    let params = form.getFieldsValue();
    dispatch(fetchUserInfo({ ...params, captchaId: captchaId }));
    // let [err, res] = await login({ ...params, captchaId: captchaId });
    // // 提交错误,重置code码
    // if (err) {
    //   form.setFieldsValue({
    //     code: ''
    //   });
    //   return handleCode();
    // }
    // let { data } = res;
    // // 勾选记住
    // console.log('登陆');
  };
  /* useEffect(()=>{
    dispatch(fetchUserInfo())
  },[dispatch]) */
  const handleCode = async () => {
    setLoading(true);
    setCaptchaId('');
    let [err, res] = await getCode();
    setLoading(false);
    if (err) return;
    let { data } = res;
    setCaptchaId(data.captchaId);
    setCodeImg(data.img);
  };
  useEffect(() => {
    handleCode();
  }, []);
  return (
    <>
      <div style={{ width: '80%', margin: '100px auto' }}>
        <Form name="basic" form={form} labelCol={{ span: 4 }} wrapperCol={{ span: 16 }} initialValues={{ remember: true, username: 'admin', password: '123456', code: '', captchaId: '' }}>
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
            label="验证码"
            name="code"
            rules={[
              {
                required: true,
                message: '请输入密码'
              }
            ]}
          >
            <Input
              addonAfter={
                <Spin spinning={loading} size="small">
                  <img className="login_qr" src={codeImg} onClick={handleCode} />
                </Spin>
              }
            />
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
      <div>
        {' '}
        <div>{JSON.stringify(userInfo)}</div>
      </div>
    </>
  );
};
export default Login;
