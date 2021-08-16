import React,{useState,useEffect} from 'react'
import axios from "axios";

import {Link} from 'react-router-dom';
import { Card } from 'antd';

const Hotellistitem=({id})=> {
const [state1, setstate] = useState(null)
useEffect(() => {

  axios
        .post("http://localhost:5000/app/singlerooms",id)
        .then(resp=>{
          setstate(resp.data)
          });
}, [id])

    return (
      
          <Card title="Card title" bordered={false} style={{ width:"100%" }} extra={<Link to={{pathname:"/Admindashboard/createroom", id: state1._id}}>Room Add+</Link>}>
            <div style={{display:"flex",alignItems:"center"}}>
                <div>
                <p>
             place: {state1.place} <br/>
             address:{state1.address}
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
