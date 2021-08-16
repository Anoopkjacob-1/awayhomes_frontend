import React from 'react'
import { Button, Form, Input,Alert  } from 'antd';
import axios from "axios";
import { useHistory } from "react-router-dom";

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
  
  const CreateHotel=()=> {
    const history = useHistory(); 
      const [form]=Form.useForm();
      const onFinish=(values)=>{
        
        axios
          .post("http://localhost:5000/app/hotelCreate", values)
          .then(resp=>{
            if(resp.status===200){
              history.push("/Admindashboard")
            }else{
              <Alert message="Hotel not created" type="warning" />
            }
          });
      }  
      
      return (
   
        <Form  form={form}{...formItemLayout} onFinish={onFinish}>
             <h4>create Hotel</h4>
        <Form.Item
         name="hotelname"
         label="Hotel Name"
         hasFeedback
         style={{width:"500px"}}
         rules={[{ required: true, message: 'Please input Hotel name!', whitespace: true }]}
         >
          <Input />
        </Form.Item>
        <Form.Item
         name="country"
         label=" Country"
         hasFeedback
         style={{width:"500px"}}
         rules={[{ required: true, message: 'Please input Country!', whitespace: true }]}
         >
          <Input />
        </Form.Item>
        <Form.Item
         name="address"
         label="Address"
         hasFeedback
         style={{width:"500px"}}
         rules={[{ required: true, message: 'Please input Address!', whitespace: true }]}
        >
          <Input />
        </Form.Item>
         <Form.Item style={{display:"flex",justifyContent:"center"}}>
             <Button type="primary" htmlType="submit" >
                 Add+
             </Button>
         </Form.Item>
        </Form> 

    )
}



export default CreateHotel

