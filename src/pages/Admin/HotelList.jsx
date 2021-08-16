import React,{useEffect,useState} from 'react'
import { Row, Col } from 'antd';
import Hotellistitem from './Hotellistitem'
import axios from "axios";


function HotelList() {

  const [state, setstate] = useState(null)
useEffect(() => {

  axios
        .post("http://localhost:5000/app/allrooms")
        .then(resp=>{
          setstate(resp.data)
          });
}, [])

  const divstyle = { padding: '8px 0' ,margin: '8px 8px'};
  const colstyle = { padding: '8px 0',margin: '8px 8px' };
    return (
      <Row gutter={16} style={{display:"flex",justifyContent:"center",alignItems:"center"}} >
         {state&& 
                state.map((item) => {
                    return(
                     <Col  className="gutter-row" style={colstyle} span={6}>
                     <div style={divstyle}>
                        <Hotellistitem id={item._id} />
                     </div>
                     </Col>
                )
              })
              }
       </Row>
     
    )
}

export default HotelList
