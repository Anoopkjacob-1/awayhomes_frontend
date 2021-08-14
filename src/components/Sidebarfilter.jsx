import { Button, Form, Input, Select, DatePicker,Menu } from "antd";
import { FilterOutlined } from '@ant-design/icons';

// import intervalToDuration from 'date-fns/intervalToDuration';
import differenceInDays from "date-fns/differenceInDays";

const { RangePicker } = DatePicker;
const { SubMenu } = Menu;

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

const dateFormat = "YYYY/MM/DD";

const Sidebarfilter = () => {
  const { Option } = Select;
  const [form] = Form.useForm();
  const onFinish = (values) => {
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
    );
  };
  return (
    <Menu
      mode="inline"
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      style={{ height: "100%", marginTop: "1rem", borderRight: 0 }}
    >
      <SubMenu key="sub1" icon={<FilterOutlined />} title="Filter">
        <Form form={form} {...formItemLayout} onFinish={onFinish} width="100%"   >
         
            <Form.Item
              name="date"
              hasFeedback
              style={{ width: "400px",padding:".3rem" }}
              rules={[{ required: true, message: "Please input date!" }]}
            >
              <RangePicker format={dateFormat}    />
            </Form.Item>
  

         
            <Form.Item
              name="place"
              hasFeedback
              style={{ width: "400px",padding:".3rem" }}
              rules={[
                {
                  required: true,
                  message: "Please input place!",
                  whitespace: true,
                },
              ]}
            >
              <Input placeholder="place"/>
            </Form.Item>
        
            <Form.Item
              name="roomtype"
              hasFeedback
              style={{ width: "400px",padding:".3rem" }}
              rules={[{ required: true, message: "Room type is required" }]}
            >
              <Select style={{ width: "100%" }} placeholder="Room type">
                <Option value="single">Single</Option>
                <Option value="double">Double</Option>
                <Option value="twin">Twin</Option>
                <Option value="triple">Triple</Option>
                <Option value="quad">Quad</Option>
              </Select>
            </Form.Item>
       

      
            <Form.Item style={{ display: "flex", justifyContent: "center",width:"100%" }}>
              <Button type="primary" htmlType="submit">
                Filter
              </Button>
            </Form.Item>
       
        </Form>
      </SubMenu>
    </Menu>
  );
};

export default Sidebarfilter;
