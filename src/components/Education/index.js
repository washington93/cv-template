import React from 'react'

import './styles.css'

export default function WorkExperience({
  color = 'teal',
  company="company",
  period = "20xx - 20xx", 
  occupation = "occupation",
  children="content"
  }){
  return (
    <>
      <div className="workExperience">
        <div className="workExperienceHeader" style={{color: color}}>
          <div className="workExperienceTitle">
            {company}
          </div>
          <div className="workexperiencePeriod">
            {period}
          </div>
        </div>
        <div className="workExperienceContent">
          <ul>
            <li>{occupation}</li>
            <li>{children}</li>
          </ul>
        </div>
        <div className="line"></div>
        <dic className="circle"></dic>
      </div>
    </>
  )
}