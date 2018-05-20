import React from 'react';

function TechItem(props) {
  console.log("THIS IS THE ICON", props.toggle)

  return (
    <div className="tech_item tooltip" onClick={e => props.info(props.name, props.description)}>
      <div className="tech_img">
      {props.svg}
      </div>
      <span className="tooltiptext">{props.name}</span>
    </div>
  )
}

export default TechItem;