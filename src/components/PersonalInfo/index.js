import React from 'react'
import { MdWork,MdPlace, MdEmail} from "react-icons/md";
import {IoLogoWhatsapp} from 'react-icons/io'

import './styles.css'

import Info from '../../components/Info'

export default function PersonalInfo(){
  return (
    <>
      <div className="personInfo">
        <Info icon={<MdWork size={25} />} description=" DEVELOPER"/>
        <Info icon={<MdPlace size={25} />} description="Parnamirim-RN" />
        <Info icon={<MdEmail size={25} />} description="washington.s@escolar.ifrn.edu.br"/>
        <Info icon={<IoLogoWhatsapp size={25} />} description="(00) 00000-0000"/>
      </div>
    </>
  )
}