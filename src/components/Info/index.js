import React from 'react'
import {AiOutlineFile} from 'react-icons/ai'

import './styles.css'


export default function Info({
    icon = (<AiOutlineFile size={28}/>), 
    description="Description",
    color = 'teal'
  }){
  return (
    <>
      <div className="info">
          <div className="icon">
            <div style={{color: color}}>
              {icon}
            </div>
          </div>
          <div className="text">
            {description}
          </div>
      </div>
    </>
  )
}