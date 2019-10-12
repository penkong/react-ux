//
import '../../sass/component/BigCard.scss';
import React from 'react'

const BigCard = ({ children }) => {
  return (
    <div className="big-card">
      {children}
    </div>
  )
}

export default BigCard
