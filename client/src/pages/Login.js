import React from "react";
import { Form, Input } from "antd";
import "../styles/loginstyles.css";
const Login = () => {
  //form-handler
  const onFinishHandler = (values) => {
    console.log(values);
  };
  return (
    <>
      <div className="form-container ">
        <Form
          layout="vertical"
          onFinish={onFinishHandler}
          className="login-form"
        >
          <h3>Login as Admin</h3>
          <Form.Item label="Name" name="name">
            <Input type="text" placeholder="Enter UserName here" required />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type="password" placeholder="Enter Password here" required />
          </Form.Item>
          <button className="btn btn-primary" type="submit">
            Login as Admin
          </button>
        </Form>
      </div>
    </>
  );
};

export default Login;
