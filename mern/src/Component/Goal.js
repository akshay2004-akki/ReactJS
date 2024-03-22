import React from 'react'
import Madegoal from './Madegoal.js';
import Missedgoal from './Missedgoal.js'


export default function Goal(props) {
  return (
    <>
    <div>
      {props.id===true ? <Madegoal/> : <Missedgoal/> }
    </div>
    </>
  )
}
