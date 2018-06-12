import React from 'react';

function TechItem(props) {
  // showing tech square with props
  return (
    <div className="tech_item tooltip angle_bracket" onClick={() => props.info(props.name, props.description)}>
      <div className="tech_img">
        {props.svg}
      </div>
      {/* showing tooltip with tech name */}
      <span className="tooltiptext">
        <span className="tag"># </span>
        {props.name}
      </span>
    </div>
  );
}

export default TechItem;
