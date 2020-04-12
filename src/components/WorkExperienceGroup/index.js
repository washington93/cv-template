import React from 'react'
import {FaSuitcase} from 'react-icons/fa'

import './styles.css'

export default function EducationGroup({
  icon = (<FaSuitcase size={25}/>),
  color = 'teal',
  title = "Education", 
  children = "content"
}){
  return (
    <>
    <div className="workExperienceGroup">
      <div className="workExperienceGroupHeader" style={{color: color}}>
        {icon}
        <div className="workExperienceGroupTitle">
          {title}
        </div>
      </div>
      <hr />
      <div className="workExperienceGroupContent">
        {children}
      </div>
    </div>
  </>
  )
}