import React from 'react'
import avatar from '../../src/avatar.jpg'
import './ProfilePhoto.css'
const ProfilePhoto = () => (
    // eslint-disable-next-line jsx-a11y/alt-text
    <img src={avatar} className="myImg"/>
)

export default ProfilePhoto