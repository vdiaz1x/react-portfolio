import React from 'react';
import TechItem from '../items/TechItem';

function Tech(props) {
  // mapping to build the list of tech icons with props
  const icon_list = props.icons.map((icon, index) => <TechItem
      key={"icon" + index}
      {...icon}
      info={props.info}
      toggle={props.toggle}
    />)

  // info box for the tech that is clicked on
  const info_box = (
    <section className="tech_dossier">
      <h1 className="tech_header">
        <span className="tag"># </span> {props.dossier.name}
      </h1>
      <p className="quotes tech_p">
        {props.dossier.description}
      </p>
    </section>
  )

  // passing down toggle state from app
  // if toggle true, show info box for that tech
  // else show nothing
  const dossier = props.toggle ? info_box : null

  return (
    <div className="tech">
      <h1 className="name">
        <span className="tag">&lt; </span>
        Tech Stack
        <span className="tag"> /&gt;</span>
      </h1>
      <section className="tech_nav">{icon_list}</section>
      {dossier}
    </div>
  )
}

export default Tech;