import React from 'react'
import {FiTarget} from 'react-icons/fi'

import './styles.css'

export default function Goal({
  icon = (<FiTarget size={25}/>),
  color = 'teal',
  goalTitle="Goal", 
  children="content"
  }){
  return (
    <>
      <div className="goal">
        <div className="goalHeader" style={{color: color}}>
          {icon}
          <div className="goalTitle">
            {goalTitle}
          </div>
        </div>
        <hr />
        <div className="goalContent">
          {children}
        </div>
      </div>
    </>
  )
}