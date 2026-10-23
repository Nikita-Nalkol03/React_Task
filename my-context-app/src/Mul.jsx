import React, { useContext } from 'react'
import NumsContext from './NumsContext'

const Mul = () => {
    const {a,b}=useContext(NumsContext)
  return (
    <div>
        <h2>
            Multily={a*b}
        </h2>
    </div>
  )
}

export default Mul