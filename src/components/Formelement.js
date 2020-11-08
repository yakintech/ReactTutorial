import React, {useState} from 'react'

function Formelement() {

    const [country, setCountry] = useState('ABD***');
    const [metal, setMetal] = useState('');

    const changeCountry = (data) =>{
         setCountry(data);
    }

    const changeMetal = (data) =>{
        setMetal(data);
    }

    const show = ()=>{
        console.log(metal);
        console.log(country);

    }

    return (
        <div>
            {/* inputun value değerini (country) değiştirmeniz için state değiştirmeniz gerekir. Dolayısıyla onChange yardımıyla state değişimini tetikledim. e objesi input un son halini bana veriyor  */}
            <input type="text" name="country" value={country} onChange={(e)=> changeCountry(e.target.value)} />

            <select value={metal} onChange={(e)=> changeMetal(e.target.value)}>
                <option value="ironmaiden">Iron Maiden</option>
                <option value="slipknot">Slipknot</option>
                <option value="rammstein">Rammstein</option>
            </select>
            <button onClick={show}>Dataları Göster</button>
        </div>
    )
}

export default Formelement
