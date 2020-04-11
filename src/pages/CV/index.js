import React from 'react'

import Profile from '../../components/Profile'

import './styles.css'

export default function CV(){
  return (
  <>
    <div className="cv">
      <div className="col col-sidebar">
        <Profile />
      </div>
      <div className="col col-content card">
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
      </div>
      {/*content end*/}
      <div className="row footer">
        <div className="square" style={{'background-color':'#66b2b2'}}></div>
      </div>
    </div>
  </>
  )
}