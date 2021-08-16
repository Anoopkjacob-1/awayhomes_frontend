import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { Modal } from 'antd';




export default function Notfound() {
    const history = useHistory(); 
    const [isModalVisible, setIsModalVisible] = useState(true);
    const handleOk = () => {
        setIsModalVisible(false);
          history.push({pathname:"/"});
      };
      
    return (
        <Modal title="Page NOt Found" 
        visible={isModalVisible} 
        onOk={handleOk} 
        okText="Back Home" 
        closable="false"
        destroyOnClose="true"
         >
          <p>404 Page Not Found</p>
        </Modal>
        
    )
}
