import { Button, Checkbox, Form, Input, notification } from 'antd';
import React, {useState } from 'react';
import {SmileOutlined, FrownOutlined} from "@ant-design/icons"
import axios from 'axios';
import useLocalStorage from '../utils/useLocalStorage';
import { setToken } from '../store';
import { useAppContext } from '../store';
// import { useNavigate } from 'react-router-dom';

export default function Login() {
  const { dispatch } = useAppContext();

    // 로컬스토리지에 token 값 저장하기 
    // const [jwtToken, setJwtToken]=useLocalStorage("jwtToken","");
    
  const [fieldErrors,setFieldErrors]= useState({})

  const onFinish = values => {
    async function fn() {
        const {username, password} = values;

        setFieldErrors({});

        const data= {username, password};

        try{
            const response= await axios.post("http://localhost:8000/accounts/token/", data);

            const {data: {token: jwtToken}}=response;
            
            dispatch(setToken(jwtToken))
            // setJwtToken(jwtToken)

        notification.open({
          message:"Succesfully Loged In",
          icon:<SmileOutlined style={{color:'#108ee9'}}/>
        })

        // 여기서 login 으로 이동시키기
        // navigate('/accounts/login')
      } catch (error) {
        if (error.response) {
          notification.open({
            message: "Failed to Log In",
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
        {...fieldErrors.non_field_errors}
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
}



