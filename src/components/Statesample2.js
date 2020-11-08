import React, {useState} from 'react'

function Statesample2() {

    let [sayac, setSayac] = useState(3);


    const changeSayac = ()=>{
        setSayac(500);
    }

  

    return (
        <div>
            <h1>{sayac}</h1>
            <button onClick={changeSayac}>Change Sayac</button>
        </div>
    )
}

export default Statesample2
