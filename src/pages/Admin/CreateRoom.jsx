import React from 'react'
import { Button, Form,InputNumber ,Select  } from 'antd';
// import intervalToDuration from 'date-fns/intervalToDuration';
import differenceInDays from 'date-fns/differenceInDays'

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
  
  const CreateRoom=()=> {
    const { Option } = Select;
      const [form]=Form.useForm();
      const onFinish=(values)=>{
        //   console.log(values)
        //  console.log( intervalToDuration({
        //     start: new Date(Date.now()),
        //     end: new Date(2022, 9, 7, 14, 0)
        //   })
        //  )
        console.log(
          differenceInDays(
            new Date(2012, 7, 16, 0, 0),
            new Date(2012, 6, 13, 23, 0)
          )
        ) 
      }  
      return (
          <Form  form={form}{...formItemLayout} onFinish={onFinish}>
            <h4 style={{padding:"1rem"}}>Create Room</h4>
        <Form.Item
         name="roomtype"
         label="Room type"
         hasFeedback
         style={{width:"600px"}}
         rules={[{ required: true, message: 'Province is required' }]}
         >
     <Select  style={{ width:"300px" }}>
        <Option value="single">Single</Option>
        <Option value="double">Double</Option>
        <Option value="twin">Twin</Option>
        <Option value="triple">Triple</Option>
        <Option value="quad">Quad</Option>
    </Select>
        </Form.Item>
        <Form.Item
         name="NoRoom"
         label="Number of Room"
         hasFeedback
         style={{width:"600px"}}
         rules={[{ required: true, message: 'Please input Number of Room!' }]}
         >
          <InputNumber min={1} max={10000}  style={{width:"300px"}} />
        </Form.Item>
        <Form.Item
         name="price"
         label="Price"
         hasFeedback
         style={{width:"600px"}}
         rules={[{ required: true, message: 'Please input price!'}]}
        >
          <InputNumber min={1} max={1000000}   style={{width:"300px"}} 
           formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            parser={value => value.replace(/\$\s?|(,*)/g, '')}
         />
        </Form.Item>
         <Form.Item style={{display:"flex",justifyContent:"center"}}>
             <Button type="primary" htmlType="submit" >
                 Add+
             </Button>
         </Form.Item>
        </Form> 

    )
}


export default CreateRoom





 
 
