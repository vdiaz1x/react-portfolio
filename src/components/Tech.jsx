import React from 'react';
import TechItem from '../items/TechItem';

function Tech(props) {
  // mapping to build the list of tech icons
  // console.log(props)

  const icon_list = props.icons.map((icon, index) => <TechItem
      key={"techIcon" + index}
      {...icon}
      info={props.info}
      toggle={props.toggle}
    />)

  // info box
  const info_box = (
    <section className="tech_dossier">
      <h1>{props.dossier.name}</h1>
    </section>
  )

  const dossier = props.toggle ? info_box : null

  return (
    <div className="tech">
      <h1 className="name">Tech</h1>
      <section className="tech_nav">{icon_list}</section>
      {dossier}
    </div>
  )
}

export default Tech;