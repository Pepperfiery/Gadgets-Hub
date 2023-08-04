import React, { useState } from 'react';
import { Modal, Form, Input, Checkbox, Button } from 'antd';

const LoginModal = () => {
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    // Handle login logic here
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <>
      <Button onClick={showModal}
      className='bg-white text-[#e97407] hover:border-transparent border-[#e97407] border-6 '
      >Log in</Button>
      <Modal
        title="Login"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <Form>
          <Form.Item label="Username" name="username" rules={[{ required: true, message: 'Please input your username!' }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
            <Input.Password />
          </Form.Item>
          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <Form.Item>
            <Button type="" htmlType="submit" onClick={handleOk}
            className='bg-[#e97407] text-white'
            >
              Sign In
            </Button>
            <Button type='' onClick={handleCancel} style={{ marginLeft: 8 }}
             className='bg-white text-[#e97407] hover:border-transparent border-[#e97407] border-6'

            >
              Sign Up
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default LoginModal;
