import React from "react";
import { Form, Input, message } from "antd";
import "../styles/loginstyles.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertSlice";

import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //form-handler
  const onFinishHandler = async (values) => {
    try {
      dispatch(showLoading());
      const res = await axios.post("/api/v1/user/login", values);
      dispatch(hideLoading());
      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        message.success("Login Successfully");
        navigate("/");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
      message.error("Something Went Wrong");
    }
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
          <Form.Item label="Userame" name="username">
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
