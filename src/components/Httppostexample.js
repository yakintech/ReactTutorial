import React, { useState } from 'react'

function Httppostexample() {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const changeName = (data) => {
        setName(data)
    }

    const changeDescription = (data) => {
        setDescription(data);
    }



    const postData = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name:name,description:description })
        };

        fetch("https://northwind.now.sh/api/categories",requestOptions)
        .then((res) => res.json())
        .then((response)=>{
            console.log(response);
            alert("Data ekleme işlemi başarılı!")
        })

    }

    return (
        <div>
            <div>
                <input type="text" name="name" value={name} onChange={(e) => changeName(e.target.value)} />
            </div>
            <div>
                <input type="text" name="description" value={description} onChange={(e) => changeDescription(e.target.value)} />
            </div>
            <div>
                <button onClick={postData}>Post Data</button>
            </div>
        </div>
    )
}

export default Httppostexample
