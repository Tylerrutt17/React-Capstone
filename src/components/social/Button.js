import React from 'react';
import '../../css/social/Button.css'

function Button({title, id, onClick}) {

    //const [email, setEmail] = useState('')

    return (
        <div>
            <button className={'button'} onClick={onClick} id={id}>{title}</button>
        </div>
    )
}

export default Button