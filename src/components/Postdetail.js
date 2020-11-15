import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"
import Postcomments from './Postcomments';

function Postdetail() {

    // Url den gelen id yi yakaladım. Bu id route da tanımlı olmak zorunda
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
                <div>
                    <span>Title: </span>
                    <h3>{pdetail.title}</h3>
                </div>
                <div>
                    <span>Content: </span>
                    <h3>{pdetail.body}</h3>
                </div>
            </div>
            <div>

                {/* Mevcut postun id isi alıp commentlere fırlattım. Bu sayede PostComments component i id yi yakalayıp işlemlerini gerçekleştirdi */}
                <Postcomments id={id} ></Postcomments>

            </div>


        </div>
    )
}

export default Postdetail
