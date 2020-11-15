import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"

function Postdetail() {

    let { id } = useParams();

    const [pdetail, setPDdetail] = useState({});

    useEffect(() => {

        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((res) => res.json())
            .then((result) => {
                setPDdetail(result);
            })

    }, [])


    return (
        <div>
            <h1>Post Detail</h1>
            <div>
                <span>Title: </span>
                <h3>{pdetail.title}</h3>
            </div>
            <div>
                <span>Content: </span>
                <h3>{pdetail.body}</h3>
            </div>
        </div>
    )
}

export default Postdetail
