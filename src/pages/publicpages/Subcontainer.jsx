import React from 'react'
import { Row, Col } from 'antd';
import Hotelresultsitem from './Hotelresultsitem';

const Subcontainer=()=>{
const divstyle = { padding: '8px 0' ,margin: '8px 8px'};
const colstyle = { padding: '8px 0',margin: '8px 8px' };

    return (
        <div>
            <Row gutter={16} style={{display:"flex",justifyContent:"center",alignItems:"center"}} >
        <Col  className="gutter-row" style={colstyle} span={6}>
        <div style={divstyle}>
           <Hotelresultsitem/>
        </div>
        </Col>
        <Col className="gutter-row" style={colstyle} span={6}>
        <div style={divstyle}>
           <Hotelresultsitem/>
        </div>
        </Col>
        <Col className="gutter-row" style={colstyle} span={6}>
        <div style={divstyle}>
           <Hotelresultsitem/>
        </div>
        </Col>
        <Col className="gutter-row" style={colstyle} span={6}>
        <div style={divstyle}>
           <Hotelresultsitem/>
        </div>
        </Col>
        <Col className="gutter-row" style={colstyle} span={6}>
        <div style={divstyle}>
           <Hotelresultsitem/>
        </div>
        </Col>
        <Col className="gutter-row" style={colstyle} span={6}>
        <div style={divstyle}>
           <Hotelresultsitem/>
        </div>
        </Col>
       </Row>
        </div>
    )
}

export default Subcontainer
