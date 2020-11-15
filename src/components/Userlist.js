import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"

function Userlist() {

    const [users, setUsers] = useState([]);

    useEffect(() => {

        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((result) => {
                setUsers(result);
            })

    }, [])


    return (
        <div>
            <ul>
                {
                    users.map((item) =>
                        (<li key={item.id}>

                            <Link to={`/users/${item.id}`}> {item.name}</Link>

                        </li>)
                    )
                }
            </ul>
        </div>
    )
}

export default Userlist
