import React, { useState } from 'react'

function Team() {


    let teams = [
        {
            id: 1,
            name: 'GÖZTEPE'
        },
        {
            id: 2,
            name: 'Liverpool'
        },
        {
            id: 3,
            name: 'Zaragoza'
        }
    ];


    const [country, changeCountry] = useState('TC');

    function change() {
        changeCountry('Rusya');
    }

    const [takimlar, changeTeam] = useState(teams);


    function addTeam(){
       
        // teams.push({id:4,name:'Juventus'});
        // changeTeam(teams);
        changeTeam([...takimlar, {id:4,name:'Juventus'}]);
    }

    return (
        <div>

            <ul>
                {
                    takimlar.map((item) => {
                        return <li>{item.id} {item.name}</li>
                    })
                }
            </ul>

            <button onClick={addTeam}>Takım Ekle</button>




            <h1>{country}</h1>

            <button onClick={() => changeCountry('ABD')}>Değiştir</button>
            <button onClick={change}>Değiştir2</button>
        </div>
    )
}

export default Team
