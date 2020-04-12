import React, {useState} from 'react'

import {FaRegEyeSlash, FaRegEye} from 'react-icons/fa'

import PictureProfile from '../PictureProfile'
import PersonalInfo from '../PersonalInfo'
import SkillStatus from '../SkillStatus'
import SkillBar from '../../components/SkillBar'

import './styles.css'

import profileImg from '../../assets/profileImg.png'

export default function Profile(){
  const [regEye, setRegEye] = useState(<FaRegEye />)
  const [img, setImg] = useState(profileImg)
  
  function showHide(){
    if(regEye.type.displayName === 'FaRegEye'){
      setRegEye(<FaRegEyeSlash />)
      setImg("")
    }else{
      setRegEye(<FaRegEye />)
      setImg(profileImg)
    }
  }

  return (
    <div className="profile card">
      <PictureProfile img={img} name="Washington da Silva Ribeiro" />
      <div className="row">
        <div className="col">
          <PersonalInfo />
        </div>
      </div>
      <div className="imgHide" onClick={showHide}>
        {regEye}
      </div>
      <SkillStatus category="Desenvolvimento">
        <SkillBar title="JAVA" progress="40"/>
        <SkillBar title="JAVASCRIPT" progress="70" />
        <SkillBar title="C++" progress="30" />
        <SkillBar title="ANDROID NATIVO" progress="60" />
        <SkillBar title="HTML/CSS" progress="80" />
      </SkillStatus>
      <SkillStatus category="Idiomas">
        <SkillBar title="Inglês" progress="40"/>
      </SkillStatus>
    </div>
  )
}