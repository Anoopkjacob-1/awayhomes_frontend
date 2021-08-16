import { Button, Form, InputNumber, Select, DatePicker } from "antd";
import moment from "moment";
import axios from "axios";
// import intervalToDuration from 'date-fns/intervalToDuration';
import differenceInDays from "date-fns/differenceInDays";

const { RangePicker } = DatePicker;

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

const Booking = (props) => {
  const hotelid =props.location.state.id
  const { Option } = Select;
  const [form] = Form.useForm();
  const onFinish = (values) => {
    const noofdays = differenceInDays(
      new Date(moment(values.date[1]._d)),
      new Date(moment(values.date[0]._d))
    );
    const startdate = moment(values.date[0]._d).format("YYYY-MM-DD");
    const enddate = moment(values.date[1]._d).format("YYYY-MM-DD");

    const data = { ...values, startdate, enddate, noofdays };

    axios
      .post("http://localhost:5000/app/isavailable", ...data,hotelid)
      .then(console.log("sended"));
  };
  return (
    <Form form={form} {...formItemLayout} onFinish={onFinish}>
      <h4 style={{ padding: "1rem" }}>Booking Room</h4>
      <Form.Item
        name="roomtype"
        label="Room type"
        hasFeedback
        style={{ width: "600px" }}
        rules={[{ required: true, message: "Province is required" }]}
      >
        <Select style={{ width: "300px" }}>
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
        style={{ width: "600px" }}
        rules={[{ required: true, message: "Please input Number of Room!" }]}
      >
        <InputNumber min={1} max={10000} style={{ width: "300px" }} />
      </Form.Item>
      <Form.Item
        name="date"
        label="Check-in & out"
        hasFeedback
        style={{ width: "600px" }}
        rules={[{ required: true, message: "Please input date!" }]}
      >
        <RangePicker format={dateFormat} />
      </Form.Item>
      <Form.Item style={{ display: "flex", justifyContent: "center" }}>
        <Button type="primary" htmlType="submit">
          Book
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Booking;
