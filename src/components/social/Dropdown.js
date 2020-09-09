import React, {useState, useEffect} from 'react';
import '../../css/social/Dropdown.css'

function Dropdown() {

    //const [email, setEmail] = useState('')

    return (
        <div>
            <select className={'dropdown'} name="cars" id="cars">
                <option value="volvo">All</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
            </select>
        </div>
    )
}

export default Dropdown

