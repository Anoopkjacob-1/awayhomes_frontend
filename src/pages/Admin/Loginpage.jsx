import React from 'react'
import { Form, Input, Button,Alert } from 'antd';
import { useHistory } from "react-router-dom";
import axios from "axios";


const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 5,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 12,
      },
    },
  };
  
const Loginpage=()=> {
  const history = useHistory(); 

    const [form]=Form.useForm();
    const onFinish=(values)=>{
     
         axios
                .post("http://localhost:5000/app/hotelCreate", values)
                .then(resp=>{
                  if(resp.status===200){
                    localStorage.setItem("Admin")
                    history.push("/Admindashboard")
                  }else{
                    <Alert message="invalid password or username" type="warning" />
                  }
                });
    }  

    return (
        <Form  
        form={form}{...formItemLayout}
         onFinish={onFinish} 
        style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center" ,height:"100vh"}}
        >
        <Form.Item
          label="Username"
          name="username"
          style={{width:"500px"}}
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input />
        </Form.Item>
  
        <Form.Item
          label="Password"
          name="password"
          style={{width:"500px"}}
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
  
        
  
        <Form.Item
     style={{display:"flex",justifyContent:"center"}}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    )
}

export default Loginpage
