import React, {useState, useEffect} from 'react';
import '../../css/social/LeaderCell.css'
import image from './elon.jpg'

function LeaderCell({name, img_src, followers, pc}) {

    //const [email, setEmail] = useState('')

    return (
        <div className={'cell'}>
            <img src={image} className={'image'}></img>
            <div className={'name'}>{name}</div>
            <div className={'followers'}>{followers} Followers</div>
            <div className={'percentage'} style={pc>0 ? {color: 'green'} : {color: 'red'}}>{pc}%</div>
        </div>
    )
}

export default LeaderCell