import React, { useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import { Comment, Avatar, List } from 'antd';

//prop olarak gelen id yi direkt yakalıyoruz ve ona uygun commentleri api den çekip listeliyoruz
function Postcomments({ id }) {

    // let id = id
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
            .then((res) => res.json())
            .then((result) => {
                setComments(result);
            })

    }, [])


    return (
        <div>
            <div>
                {
                    comments.map((item) =>
                        (<Comment
                            author={<a>{item.email}</a>}

                            avatar={
                                <Avatar
                                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                                    alt="Han Solo"
                                />
                            }

                            content={
                                <p>{item.body}</p>
                            }
                        >

                        </Comment>)
                    )
                }

            </div>
        </div>
    )
}

export default Postcomments
