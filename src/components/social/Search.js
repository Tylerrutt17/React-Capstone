import React, {useState, useEffect} from 'react';
import '../../css/social/Search.css'
import image from '../../images/search.png'

function Search() {
    //const [email, setEmail] = useState('')
    return (
        <div>
            <input className={'search'} placeholder={'Search'}></input>
            {/* <img src={image} className={'search-icon'} /> */}
        </div>
    )
}

export default Search