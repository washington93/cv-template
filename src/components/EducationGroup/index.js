import React from 'react'
import {MdSchool} from 'react-icons/md'

import './styles.css'

export default function EducationGroup({
  icon = (<MdSchool size={25}/>),
  color = 'teal',
  title = "Education", 
  children = "content"
}){
  return (
    <>
    <div className="educationGroup">
      <div className="educationGroupHeader" style={{color: color}}>
        {icon}
        <div className="educationGroupTitle">
          {title}
        </div>
      </div>
      <hr />
      <div className="educationGroupContent">
        {children}
      </div>
    </div>
  </>
  )
}