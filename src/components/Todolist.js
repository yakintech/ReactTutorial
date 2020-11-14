import React, { useState } from 'react'

function Todolist() {

    const [kisi, setKisi] = useState('');
    const [kisiler, setKisiler] = useState([]);

    const changeKisi = (data) => {
        setKisi(data);
    }

    const addKisi = () => {
        setKisiler([...kisiler, kisi]);
        // changeKisi('');
    }

    const deleteKisi = (key)=>{
       delete kisiler[key];
       setKisiler([kisiler]);
    }

    return (
        <div>
            {/* <h1>{kisi}</h1> */}
            <div>
                <input type="text" name="kisi" value={kisi} onChange={(e) => changeKisi(e.target.value)} />
                <button onClick={addKisi}>Ekle</button>
            </div>
            <div>
                <ul>
                    {
                        kisiler.map((item, key) =>
                            (<li onClick={()=> deleteKisi(key)} key={key}>{item}</li>)
                        )
                    }
                </ul>
            </div>

        </div>
    )
}

export default Todolist
