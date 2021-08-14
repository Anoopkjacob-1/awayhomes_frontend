import React from 'react'
import { Row, Col } from 'antd';
import Hotellistitem from './Hotellistitem'

function HotelList() {
  const divstyle = { padding: '8px 0' ,margin: '8px 8px'};
  const colstyle = { padding: '8px 0',margin: '8px 8px' };
    return (
      <Row gutter={16} style={{display:"flex",justifyContent:"center",alignItems:"center"}} >
        <Col  className="gutter-row" style={colstyle} span={6}>
        <div style={divstyle}>
           <Hotellistitem/>
        </div>
        </Col>
        <Col className="gutter-row" style={colstyle} span={6}>
        <div style={divstyle}>
           <Hotellistitem/>
        </div>
        </Col>
        <Col className="gutter-row" style={colstyle} span={6}>
        <div style={divstyle}>
           <Hotellistitem/>
        </div>
        </Col>
        <Col className="gutter-row" style={colstyle} span={6}>
        <div style={divstyle}>
           <Hotellistitem/>
        </div>
        </Col>
        <Col className="gutter-row" style={colstyle} span={6}>
        <div style={divstyle}>
           <Hotellistitem/>
        </div>
        </Col>
        <Col className="gutter-row" style={colstyle} span={6}>
        <div style={divstyle}>
           <Hotellistitem/>
        </div>
        </Col>
       </Row>
     
    )
}

export default HotelList
