import React from 'react'

import './styles.css'

export default function SkillStatus({category="Category", children}){
  return (
    <div className="skillStatus">
      <div className="skillCategory">{category}</div>
        {children}
    </div>
  )
}