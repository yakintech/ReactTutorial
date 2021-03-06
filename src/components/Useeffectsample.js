import React, { useEffect, useState } from 'react'

function Useeffectsample() {

    const [ad, setName] = useState('Çağatay');
    const [soyad, setSurname] = useState('Yıldız');


    //Her update sonrası çalışır
    useEffect(()=>{
        console.log('State updated');
    })


    //Sadece bir kez çalışıyor
    useEffect(() => {
        console.log('State finish!');
    }, [])




    useEffect(() => {
        console.log('Soyad state değişti!');
    }, [soyad])

    return (
        <div>
            <h2>{ad}</h2>
            <button onClick={()=>setName('Ali')}>Change Name</button>
            <h2>{soyad}</h2>
            <button onClick={()=>setSurname('Karayurt')}>Change Surname</button>
            <h1>Effect Component</h1>
        </div>
    )
}

export default Useeffectsample
