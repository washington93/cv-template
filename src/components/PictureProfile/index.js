import React from 'react'

import './styles.css'

import profileImgDefault from '../../assets/profileDafault.png'

export default function PictureProfile({name = "unamed", img}){
  if(img !== undefined && img !== ""){
    return(
      <div className="pictureProfile">
          <img src={img} alt="Perfil" />
          <h1>{name}</h1>
      </div>)
  }else if(name !== undefined && name !== "unamed"){
    return (
    <div className="pictureProfile">
      <img src={profileImgDefault} alt="Perfil" />
      <h1>{name}</h1>
    </div>)
  }else{
    return (
      <div className="pictureProfile">
        {/* d3d6db */}
        <img src={profileImgDefault} alt="Perfil" />
        <h1>Unamed</h1>
      </div>)
  }
}