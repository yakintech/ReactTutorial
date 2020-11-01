import React, { useState } from 'react'

function Statesample() {

    let users = [{
        id: 1,
        name: 'Ali'
    },
    {
        id: 2,
        name: 'Ayşe'
    }]
    let [sayac, changeName] = useState(5);
    let [kisi, changeKisi] = useState(users)

    function change() {
        sayac = sayac + 1;
        changeName(sayac);

    }


    function addUser(){
        changeKisi([{id:3,name:'Zeynep'},...kisi]);
    }

    return (
        <div>
            <button onClick={change}>Değiştir</button>
            <h1>{sayac}</h1>

            <ul>
                {
                    kisi.map((item) => {
                        return <li>{item.name}</li>
                    })
                }
            </ul>

            <button onClick={addUser}>Add User</button>
        </div>
    )
}

export default Statesample
