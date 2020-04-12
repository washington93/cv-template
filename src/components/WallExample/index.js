import React from 'react'

import './styles.css'

export default function WallExample(){
  return (
    <>
      <div className="row">
        <div className="col">
          <div className="square" style={{'background-color':'#004c4c'}}></div>
        </div>
      </div>
      <div className="row">
        <div className="col col-2">
          <div className="square" style={{'background-color':'#006666'}}></div>
        </div>
        <div className="col col-2">
          <div className="square" style={{'background-color':'#006666'}}></div>
        </div>
      </div>
      <div className="row">
        <div className="col col-3">
          <div className="square" style={{'background-color':'#008080'}}></div>
        </div>
        <div className="col col-3">
          <div className="square" style={{'background-color':'#008080'}}></div>
        </div>
        <div className="col col-3">
          <div className="square" style={{'background-color':'#008080'}}></div>
        </div>
      </div>
      <div className="row">
        <div className="col col-4">
          <div className="square" style={{'background-color':'#66b2b2'}}></div>
        </div>
        <div className="col col-4">
          <div className="square" style={{'background-color':'#66b2b2'}}></div>
        </div>
        <div className="col col-4">
          <div className="square" style={{'background-color':'#66b2b2'}}></div>
        </div>
        <div className="col col-4">
          <div className="square" style={{'background-color':'#66b2b2'}}></div>
        </div>
      </div>
      <div className="row">
        <div className="col col-5">
          <div className="square" style={{'background-color':'#b2d8d8'}}></div>
        </div>
        <div className="col col-5">
          <div className="square" style={{'background-color':'#b2d8d8'}}></div>
        </div>
        <div className="col col-5">
          <div className="square" style={{'background-color':'#b2d8d8'}}></div>
        </div>
        <div className="col col-5">
          <div className="square" style={{'background-color':'#b2d8d8'}}></div>
        </div>
        <div className="col col-5">
          <div className="square" style={{'background-color':'#b2d8d8'}}></div>
        </div>
    </div> 
    </>
  )
}