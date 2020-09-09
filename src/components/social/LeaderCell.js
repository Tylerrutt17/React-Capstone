import React, {useState, useEffect} from 'react';
import '../../css/social/LeaderCell.css'
import image from './elon.jpg'

function LeaderCell({name, img_src, followers, pc, onClick}) {

    //const [email, setEmail] = useState('')

    return (
        <div className={'cell'} onClick={onClick}>
            <img src={image} className={'image'}></img>
            <div className={'name'}>{name}</div>
            <div className={'followers'}>{followers} Followers</div>
            <div className={'percentage'} style={pc>0 ? {color: '#57D900'} : {color: 'red'}}>{pc}%</div>
        </div>
    )
}

export default LeaderCell