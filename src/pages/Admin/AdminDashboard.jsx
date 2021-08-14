import React from 'react'
import {BrowserRouter as Router, Switch ,Link} from 'react-router-dom';
import { Layout,Menu,Button } from 'antd';
import { useHistory } from "react-router-dom";
  

import {AdminRoute} from '../../layouts/AdminLayout'

import CreateHotel from './CreateHotels';
import HotelList from './HotelList';
import Notfound from '../../components/404';
import CreateRoom  from './CreateRoom';

const { Header, Content } = Layout;
 
const AdminDashboard=()=> {
  const history = useHistory(); 

  const logout=()=>{
    history.push('/home');
    localStorage.clear()
  }
    return (    
    <Layout style={{minHeight:"100vh"}}>
<Router>
      <Header>           
      <Menu theme="dark"  mode="horizontal" defaultSelectedKeys={['2']}>
              <Menu.Item key="1">
                <Button onClick={()=>logout()} style={{backgroundColor:"black" ,color:"white",border:"none"}}>
                   log out
                </Button>
              </Menu.Item>
              <Menu.Item key="2" >
                  <Link to="/Admindashboard">
                      Create Hotels
                 </Link>      
            </Menu.Item>
              <Menu.Item key="3">
              <Link to="/Admindashboard/hotellist">
                  Hotels List
             </Link>
              </Menu.Item>
           </Menu>
      </Header>
      <Content style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
    <Switch>
     <AdminRoute exact path="/Admindashboard"  component={CreateHotel}/>
     <AdminRoute exact path="/Admindashboard/hotellist"  component={HotelList}/>
     <AdminRoute exact path="/Admindashboard/createroom"  component={CreateRoom}/>
     <AdminRoute path="*" component={Notfound} />
    </Switch>
      </Content>
    </Router>
    </Layout>

    )
}

export default AdminDashboard

