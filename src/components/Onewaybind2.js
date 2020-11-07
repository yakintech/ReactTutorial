import React, { useState } from 'react'

function Onewaybind2() {

    const [ulke, setCountry] = useState('ABD');

    const ulkedegis = () => {
        alert('Aman da aman')
    }

    const ornek = () => 'Çağatay';
    
    function ornek2(){
        alert('Örnek 2 function çalıştırıldı');
        return 'Çağatay';
    }

    let sehir = 'İstanbul';
    const changeCity = ()=>{
        sehir = 'Ankara';
        alert('Ankara atandı!')
    }

    return (
        <div>
            <h1>{sehir}</h1>
            <button onClick={changeCity}>Sehir değiş</button>
            <h1>{ulke}</h1>
            <button onClick={()=> setCountry('Turkey')}>Change</button>
            <button onClick={()=> ornek2()}>Change2</button>
            <button onClick={ornek2}>Change3</button>
        </div>
    )
}

export default Onewaybind2
