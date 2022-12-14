import { Button, Checkbox, Form, Input, notification } from 'antd';
import React, { useState } from 'react';
import {SmileOutlined, FrownOutlined} from "@ant-design/icons"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup= () => {

  const navigate= useNavigate()

  const [fieldErrors, setFieldErrors] = useState({});

  const onFinish = values => {
    async function fn() {
        const {username, password, age, position} = values;
        setFieldErrors({});

        const data= {username, password, age, position};

        try{
            const response= await axios.post("http://localhost:8000/accounts/signup/", data);
        
        notification.open({
          message:"Succesfully Singed In",
          description:"Moving to Login Page",
          icon:<SmileOutlined style={{color:'#108ee9'}}/>
        })

        // 여기서 login 으로 이동시키기
        // navigate('/accounts/login')
      } catch (error) {
        if (error.response) {
          notification.open({
            message: "Failed to Sign In",
            description: "Please check your Id and Password",
            icon: <FrownOutlined style={{ color: "#ff3333" }} />
          });

          const { data: fieldsErrorMessages } = error.response;

          setFieldErrors(
            Object.entries(fieldsErrorMessages).reduce(
              (acc, [fieldName, errors]) => {
                acc[fieldName] = {
                  validateStatus: "error",
                  help: errors.join(" ")
                };
                return acc;
              },
              {}
            )
          );
        }
      }
    }
    fn();
  };

  return (
    <Form
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      autoComplete={"off"}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
          {
            min:5, message:"Username should be longer than 5"
          }
        ]}
        hasFeedback
        {...fieldErrors.username}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label='Position EX) MF, CB, FW '
        name="position"
        rules={[
          {
            required: true,
            message: 'Please input your Position',
          },
          {
            min:2, message:""
          }
        ]}
        hasFeedback
        {...fieldErrors.username}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Age"
        name="age"
        rules={[
          {
            required: true,
            message: ''
          },
          {
            min:2, message:""
          }
        ]}
        hasFeedback
        {...fieldErrors.username}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
        {...fieldErrors.password}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};



export default Signup;


