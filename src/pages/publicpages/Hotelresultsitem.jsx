import React from 'react'
import {Link} from 'react-router-dom';
import { Card, } from 'antd';

const Hotelresultsitem=()=> {
    return (
      
   <Card title="Card title" bordered={false} style={{ width:"100%" }} extra={<Link to="/home/Booking">Book</Link>}>
   <div style={{display:"flex",alignItems:"center"}}>
      <div>
            <p>
            place: "place" <br/>
            address:"address"
            </p>
            </div>
       <div>
        <img src="#" alt="hotel_images" width="10vh" height="10vh"/>
        </div>
        </div>
    </Card>
    )
}

export default Hotelresultsitem


