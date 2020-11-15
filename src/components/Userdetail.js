import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"

function Userdetail() {

    let { id } = useParams();
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);


    useEffect(() => {

        setTimeout(() => {
            fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
                .then((res) => res.json())
                .then((result) => {
                    setLoading(false);
                    setUser(result);
                })
        }, 1000);


    }, []);


    return (
        <div>
            <h1>{id} Detail Page</h1>
            {
                loading ?
                    (

                        <div>Loading...</div>
                    )
                    :
                    <div>
                        <div>
                            <span>Name:</span>
                            <span>{user.name}</span>
                        </div>
                        <div>
                            <span>EMail:</span>
                            <span>{user.email}</span>
                        </div>
                        <div>
                            <span>Phone:</span>
                            <span>{user.phone}</span>
                        </div>
                    </div>
            }

        </div>
    )
}

export default Userdetail
