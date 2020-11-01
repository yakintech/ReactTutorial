import React from 'react'
import style from '../css/sample.module.css'
import kopek from '../img/kopek.jpg'
function Csssample() {
    const h1inline = {
        color:'red',
        backgroundColor:'yellow'
    }
    return (
        <div>
            <img src={kopek} alt=""/>

            <h1 style={h1inline}>Bilge Adam</h1>
            <h2 style={{color:'tomato', backgroundColor:'black'}}>Çağatay Yıldız</h2>
            <p>On numara lorem ipsum</p>
            <span className={style.main1}>Span örnek - 1</span>
            <span className={style.main2}>Span örnek - 2</span>
            <span className={style.main3}>Span örnek - 3</span>
        </div>
    )
}

export default Csssample
