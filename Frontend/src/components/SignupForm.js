import { Button, Checkbox, Form, Input, notification } from 'antd';
import React, { useState } from 'react';
import {SmileOutlined, FrownOutlined} from "@ant-design/icons"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignupForm = () => {

  const navigate= useNavigate()

  const [fieldErrors, setFieldErrors] = useState({});

  const onFinish = values => {
    async function fn() {
        const {username, password} = values;
        setFieldErrors({});

        const data= {username, password};

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
            message: "회원가입 실패",
            description: "아이디/암호를 확인해주세요.",
            icon: <FrownOutlined style={{ color: "#ff3333" }} />
          });

          const { data: fieldsErrorMessages } = error.response;

          setFieldErrors(
            Object.entries(fieldsErrorMessages).reduce(
              (acc, [fieldName, errors]) => {
          console.log(errors)

                // errors : ["m1", "m2"].join(" ") => "m1 "m2"
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
  //       catch (error) {
  //           if (error.response) {
  //             notification.open({
  //               message:"Failed to Sign In",
  //               description:"Please check your Id and Password Again",
  //               icon:<FrownOutlined style={{color:'#ff3333'}}/>
  //             })
  //               const {data: fieldsErrorMessages} = error.response;
  //               console.log(fieldsErrorMessages)
  //               setFieldErrors(
  //                   Object.entries(fieldsErrorMessages).reduce((acc,[fieldName,errors])=> {
  //                   acc[fieldName] ={
  //                        validateStaus: "error",
  //                        help: errors.join(" ")
  //                    };
  //                    return acc
  //                }, {}))
                
  //           }
  //       }
  //   }
  //   fn();
  
  // };

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
      {/* <Form.Item
        label="Position"
        name="position"
        rules={[
          {
            required: true,
            message: 'Please use abbreviation. EX) MF, CB, FW ',
          },
          {
            min:2, message:""
          }
        ]}
        hasFeedback
        {...fieldErrors.username}
      >
        <Input />
      </Form.Item> */}

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



export default SignupForm;


// import React, { useEffect, useState } from "react";
// import {Alert} from "antd"
// import axios  from "axios";


// const SignupForm = () => {


//     const [inputs, setInputs] = useState({username:"", password:""});

//     const [errors, setErrors]= useState({})

//     const [formDisabled, setFormDisabled] = useState(true);
//     const onSubmit = (e) => {
//         e.preventDefault();
//         console.log("onsubmit:", inputs)
    

//     axios.post("http://localhost:8000/accounts/signup/", inputs)
//         .then(response => {
//             console.log("response:", response)

//         })
//         .catch(error => {
//             console.log("error:",error)
//             if (error.response) {
//                 setErrors({
//                     username: (error.response.data.username || []).join(" "),
//                     password: (error.response.data.password || []).join(" ")
//                 })
//             }
//         })
//     };

//     useEffect(()=>{
//         const isDisabled= Object.values(inputs).every(s=>s.length>0);
//         setFormDisabled(!isDisabled);
//     }, [inputs])


//     const onChange = (e) =>{
//         const {name, value} = e.target;
//         setInputs({
//             ...inputs, [name]:value
//         })
//     }
//     return(
//         <div>
//             <form onSubmit={onSubmit}>
//             <div>
//                 <input type="text" name="username" onChange={onChange}/>
//                 {errors.username && <Alert type="error" message={errors.username}/>}
//             </div>
//             <div>
//             <input type="password" name="password" onChange={onChange}/>
//                 {errors.password && <Alert type="error" message={errors.password}/>}


//             </div>
//             <input type="submit" value="Sign UP"/>
//             </form>
//         </div>
//     )

// }

// export default SignupForm