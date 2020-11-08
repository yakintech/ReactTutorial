import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Modal, Button } from 'antd';

function Modalexample() {

    const [modalvisible, setVisible] = useState(false);

    const openModal = ()=>{
        setVisible(true);
    }

    const okClick = ()=>{
        setVisible(false);
    }
    const cancelClick = ()=>{
        setVisible(false);
    }

    return (
        <div>
            <Button onClick={openModal}>Modal Aç</Button>
            <Modal
                visible={modalvisible}
                onOk={okClick}
                onCancel={cancelClick}
            >
                <p>10 numara modal</p>
                <p>Önder'in kedisi</p>
            </Modal>


        </div>
    )
}

export default Modalexample
