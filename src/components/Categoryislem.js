import React, { useState, useEffect } from 'react'
import 'antd/dist/antd.css';
import { Table, Input, Button } from 'antd';

function Categoryislem() {

    const [categoryname, setName] = useState('');
    const [description, setDescription] = useState('');
    const [categories, setCategories] = useState([]);



    useEffect(() => {

        fetch("https://northwind.now.sh/api/categories")
            .then((res) => res.json())
            .then((result) => {
                setCategories(result);
            })
    }, [])

    const changeName = (data) => {
        setName(data);
    }

    const changeDescription = (data) => {
        setDescription(data)
    }


    const postData = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: categoryname, description: description })
        };

        fetch("https://northwind.now.sh/api/categories", requestOptions)
            .then((res) => res.json())
            .then((response) => {
                console.log(response);
                //post sonrası sunucu 200 döndüğünde dönen objeyi mevcut listeye ekliyoruz. Bu sayede tablom otomatik güncellenmiş oluyor
                setCategories([...categories, response]);
            });
    }

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            //isme göre sıralama özelliğini table da açıyoruyz
            sorter: (a, b) => a.name.localeCompare(b.name)
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
        }
    ]

    return (
        <div>
            <div>
                <Input placeholder="Category name" value={categoryname} onChange={(e) => changeName(e.target.value)} />
                <Input placeholder="Description" value={description} onChange={(e) => changeDescription(e.target.value)} />
                <Button type="primary" onClick={postData}>Kayıt</Button>
            </div>
            <div>
                <Table dataSource={categories} columns={columns} />;
            </div>
        </div>
    )
}

export default Categoryislem
