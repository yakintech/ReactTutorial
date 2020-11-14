import React, { useState, useEffect } from 'react'



function Httpexample() {

    const [suppliers, setSuppliers] = useState([]);
    const [datacount, setDatacount] = useState(0);
    const [searchdata, setSearchdata] = useState('');
    //Datanın orjinalini arka tarafta saklıyorum.
    const [originaldata, setOriginaldata] = useState([]);


    // Virgülden sonraki boş dizi bu hooku component render sonrası sadece bir kez çalıştırır
    useEffect(() => {
        fetch("https://northwind.now.sh/api/suppliers")
            .then((res) => res.json())
            .then((result) => {
                setSuppliers(result);
                setOriginaldata(result);
            }
            )
    }, []);


    const changeDatacount = (count) => {
        setDatacount(count);
    }

    const changeSearchdata = (data) => {
        setSearchdata(data);
    }

    //inputa girdiği değer kadar datayı ekrana getiren metot
    const getData = () => {
        setSuppliers(originaldata.slice(0, datacount))
    }

    const search = () => {

        let searchresult = [];

        originaldata.forEach((item) => {
            if (item.companyName.includes(searchdata)) {
                searchresult.push(item);
            }
        })
        //let result = suppliers.find(q => q.companyName == searchdata);

        if (searchresult != undefined) {
            setSuppliers(searchresult);
        }
        else {
            setSuppliers([]);
        }
    }

    return (
        <div>
            <h1>Supplier List</h1>
            <div>
                <input type="text" name="datacount" value={datacount} onChange={(e) => changeDatacount(e.target.value)} />
                <button onClick={getData}>Get Data</button>
            </div>

            <div>
                <input type="text" name="searchdata" value={searchdata} onChange={(e) => changeSearchdata(e.target.value)} />
                <button onClick={search}>Search Data</button>
            </div>


            <ul>
                {
                    suppliers.map((item) =>
                        (<li key={item.id}>{item.companyName}</li>)
                    )
                }
            </ul>
        </div>
    )
}


export default Httpexample
