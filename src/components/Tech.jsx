import React from 'react';
import TechItem from '../items/TechItem'

function Item(props) {
  return (
    <div className="tech">
      <h1 className="name">Tech</h1>
      <TechItem />
    </div>
  )
}

export default TechItem;