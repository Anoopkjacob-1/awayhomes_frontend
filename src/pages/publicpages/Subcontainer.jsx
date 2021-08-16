import React,{useEffect,useState} from 'react'
import { Row, Col } from 'antd';
import Hotelresultsitem from './Hotelresultsitem';
import axios from "axios";

const Subcontainer=()=>{
const divstyle = { padding: '8px 0' ,margin: '8px 8px'};
const colstyle = { padding: '8px 0',margin: '8px 8px' };
const [state, setstate] = useState([])

useEffect(() => {

   axios
         .post("http://localhost:5000/app/allrooms")
         .then(resp=>{
           setstate(resp.data)
           });
 }, [])
    return (
        <div>
    <Row gutter={16} style={{display:"flex",justifyContent:"center",alignItems:"center"}} >
    
{state&& 
   state.map((item) => {
      return(
          <Col  className="gutter-row" style={colstyle} span={6}>
           <div style={divstyle}>
           <Hotelresultsitem id={state._id}/>
           </div>
        </Col>
      )
       })
      }
     </Row>
        </div>
    )
}

export default Subcontainer

