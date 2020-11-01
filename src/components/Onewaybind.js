import React from 'react'

function Onewaybind() {

    let ad = 'Çağatay';
    let sayi = 3;
    let data = {
        id: 1,
        name: 'IPhone'
    };

    return (
        <div>
            <h2>{ad}</h2>
            <span>{data.id} {data.name}</span>
        </div>
    )
}

export default Onewaybind
