import React from 'react'

import Profile from '../../components/Profile'
import Goal from '../../components/Goal'
import WorkExperienceGroup from '../../components/WorkExperienceGroup'
import WorkExperience from '../../components/WorkExperience'
import EducationGroup from '../../components/EducationGroup'

import './styles.css'

export default function CV(){
  return (
  <>
    <div className="cv">
      <div className="col col-sidebar">
        <Profile />
      </div>
      <div className="col col-content">
        <div className="row">
          <div className="col card">
            <Goal goalTitle="Objetivo">
              Exercer função na qual possa me consolidar no mercado de
              trabalho através de minha dedicação, disciplina, honestidade e
              força de vontade.
            </Goal>
          </div>
        </div>
        <div className="row">
          <div className="col card">
            <WorkExperienceGroup title="Experiência Profissional">
              <WorkExperience 
                company="Supermercado Nordestão"
                occupation="Conferente de inventário"
                period="2012-2015">
                Responsavel por encontrar divergências entre estoque físico e virtual.
              </WorkExperience>
              <WorkExperience 
                company="JTWL Transportes"
                occupation="Auxiliar administrativo"
                period="2016-2019">
                Auxílio de finanças, emissão de notas e ctes, organização e envio de documentos.
              </WorkExperience>
            </WorkExperienceGroup>
          </div>
        </div>
        <div className="row card">
          <div className="col">
            <EducationGroup />
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="square" style={{'background-color':'#66b2b2'}}></div>
      </div>
    </div>
  </>
  )
}