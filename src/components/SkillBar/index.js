import React from 'react'

import './styles.css'

export default function SkillBar({
  title = 'title', 
  progress = '50', 
  primary = '#B2D8D8',
  secondary = '#66B2B2',
  height = "24px",
  description= ""
}){
  return (
    <>
      <div className="skillBar row" 
           style={{'background-color': `${primary}`, height: `${height}`}} 
           title={`${description}`}>
        <div className="title" >
          {title}
        </div>
        <div className="progress" style={{width:`${progress}%`, 'background-color': `${secondary}`}}>
        </div>
      </div>
    </>
  )
}