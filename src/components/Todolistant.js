import React, { useState } from 'react'
import 'antd/dist/antd.css';
import { Input, Button, List, Row, Col } from 'antd';

function Todolistant() {

    const [kisi, setKisi] = useState('');
    const [kisiler, setKisiler] = useState([]);

    const changeKisi = (data) => {
        setKisi(data);
    }

    const addKisi = () => {
        setKisiler([...kisiler, kisi]);
    }

    return (
        <div>
            <Row>
                <Col span={12}>
                    <label>Kişi ad: </label>
                    <Input placeholder="Kişi adı..." value={kisi} onChange={(e) => changeKisi(e.target.value)} />
                </Col>

            </Row>
            <Row>
                <Col span={12}>
                    <Button onClick={addKisi}>Ekle</Button>

                </Col>
            </Row>


            <div>
                <List
                    header={<div>Kişiler</div>}
                    dataSource={kisiler}
                    bordered
                    renderItem={item => (
                        <List.Item>
                            {item}
                        </List.Item>
                    )

                    }

                />
            </div>
        </div>
    )
}

export default Todolistant
