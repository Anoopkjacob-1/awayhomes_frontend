import React,{useState} from 'react'
import './landingpage.css';
import { Layout, Menu, Form, Input,Alert  } from 'antd';
import { AlignLeftOutlined,SearchOutlined  } from '@ant-design/icons';
import { Switch,Link} from 'react-router-dom';


import {PublicRoute} from '../../layouts/publiclayout'

import Loginpage from '../Admin/Loginpage';
import Booking from '../publicpages/Booking';
import Subcontainer from '../publicpages/Subcontainer';
import Sidebarfilter from '../../components/Sidebarfilter';


import axios from "axios";
import { useHistory } from "react-router-dom";

const { Header, Sider, Content } = Layout;
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


const Landingpage=()=>{
  

const [sidebar, setsidebar] = useState(false)  
const [search, setsearch] = useState("anoop")  

const history = useHistory(); 

const [form] = Form.useForm();
const onFinish = (values) => {


   axios
          .post("http://localhost:5000/app/search", values)
          .then(resp=>{
            if(resp.status===200){
              history.push("/home")
            }else{
              <Alert message="no result" type="warning" />
            }
          });

};

    return (
        <>
        <Layout className="mainContainer" >
          <Sider className="sidebar" collapsed={sidebar} collapsedWidth="0px" >
               <Sidebarfilter/>
          </Sider>
          <Layout className="mainContentContainer">
            <Header className="navbar">
              <Menu  mode="horizontal" defaultSelectedKeys={['2']}>
              <Menu.Item key="1"   onClick={()=>setsidebar(!sidebar)} >
              <AlignLeftOutlined className="navbar_togglebutton" 
             />
              </Menu.Item>
              <Menu.Item key="2">
              <Link to="/home/login">
               login
             </Link>
              </Menu.Item>
              <Menu.Item key="3">
              <Link to="/">
               Home
             </Link>
            </Menu.Item>

              <Menu.Item key="4">
              <Form form={form} {...formItemLayout}
               onFinish={onFinish} 
               initialValues={{ search:search}} 
               style={{width:"100%",marginTop:"10px"}}
               >
                <Form.Item
                  name="search"
                  hasFeedback
                  style={{width:"400px"}}
                >
                  <Input placeholder="search"  onChange={(e)=>setsearch(e.target.value)}/>
                  <SearchOutlined style={{padding:".4rem"}} />
                </Form.Item>
            </Form>

              </Menu.Item>
           </Menu>
            </Header>
            <Content className="contentContainer" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <Switch>
              <PublicRoute exact path="/"  component={Subcontainer}/>
              <PublicRoute exact path="/home/login"  component={Loginpage}/>
              <PublicRoute exact path="/home/Booking"  component={Booking}/>
            </Switch>
            </Content>
          </Layout>
        </Layout>
      </>
    )
}

export default Landingpage



 