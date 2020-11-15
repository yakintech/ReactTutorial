import React, { useEffect, useState } from 'react'
import 'antd/dist/antd.css';
import { Table, Input, Button } from 'antd';
import { getKeyThenIncreaseKey } from 'antd/lib/message';
import { Link } from 'react-router-dom';

function Postlist() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {

        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => res.json())
            .then((result) => {
                setPosts(result);
            })

    }, []);

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id'
        },
        {
            title: 'USER ID',
            dataIndex: 'userId',
            key: 'userId',
        },
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title'
        },
        {
            title: 'Detail',
            dataIndex: 'id',
            key: 'id',
            render: id => <Link to={`/Postlist/${id}`}>Detay</Link>
        }
    ]

    return (
        <div>
                <Table dataSource={posts} columns={columns} />;

        </div>
    )
}

export default Postlist
