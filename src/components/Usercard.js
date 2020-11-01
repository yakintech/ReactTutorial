import React from 'react'
import PropTypes from 'prop-types';

function Usercard(props) {

    const { name, surname, age, languages, country, hi } = props;


    hi();

    return (
        <div>
            <div>
                <span>Ad: {name}</span>
            </div>
            <div>
                <span>Soyad: {surname}</span>
            </div>
            <div>
                <span>Yaş: {age}</span>
            </div>
            <div>
                <span>Ülke: {country}</span>
            </div>
            <div>
                <ul>
                    {
                        languages.map((item, index) => {
                            return <li key={index}>{item}</li>
                        })
                    }
                </ul>
            </div>
        </div>
    )
}


Usercard.propTypes = {
    name: PropTypes.string,
    surname: PropTypes.string,
    age: PropTypes.number,
    languages: PropTypes.array,
    country: PropTypes.element.isRequired
}
export default Usercard
