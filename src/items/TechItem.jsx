import React from 'react';

function TechItem(props) {
  console.log("THIS IS THE ICON", props.toggle)

  return (
    <div className="tech_item" onClick={e => props.info(props.name)}>
      <div className="tech_img">
      {props.svg}
      </div>
    </div>
  )
}

export default TechItem;