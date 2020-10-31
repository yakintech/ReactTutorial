import React from 'react'

//One way binding

function User() {

    let name = `Burak Acarkan`;
    let kisi = {
        ad: 'Çağatay',
        soyad: 'Yıldız',
    }

    let gruplar = ['Iron Maiden', 'Gojira', 'Draconian'];


    return (
        <div>
            <ul>
                {
                    gruplar.map((element) => {
                        return <li>{element}</li>
                    })

                    // gruplar.map((element) => 
                    //      <li>{element}</li>
                    // )

                }
            </ul>

            <h1>{name}</h1>
            <hr></hr>
            <h2>{kisi.soyad}</h2>
            <hr></hr>
        </div>
    )
}

export default User
