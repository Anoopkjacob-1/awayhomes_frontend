import React from 'react'
import { Form, Input, Button } from 'antd';


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

    const [form]=Form.useForm();
    const onFinish=(values)=>{
        console.log(values)
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
