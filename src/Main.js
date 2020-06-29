import React from 'react'
import FullName from './profile/FullName'
import ProfilePhoto from './profile/ProfilePhoto'
import Address from './profile/Address'
import './Main.css'

function  Main() {
    return(
         <div className="container">
             <FullName />
             <ProfilePhoto />
             <Address />
         </div>  
    )
}


export default Main;