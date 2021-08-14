import React from 'react'

import {Link} from 'react-router-dom';
import { Card } from 'antd';

const Hotellistitem=()=> {
    return (
        <Card title="Card title" bordered={false} style={{ width:"100%" }} extra={<Link to="/Admindashboard/createroom">Room Add+</Link>}>
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

export default Hotellistitem
