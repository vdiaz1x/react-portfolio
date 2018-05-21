import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

function Contact(props) {
  return (
    <div className="tech">
      <h1 className="name">
        <span className="tag">&lt; </span>
        Contact
        <span className="tag"> /&gt;</span>
      </h1>
      <section className="contact_list">
        <p className="contact_item">
          <span className="red">Email: </span>
          <a className="blue" href="mailto:vdiaz@gmail.com">
            vdiaz@gmail.com
          </a>
          <FontAwesomeIcon icon={"fas","times"}/>
        </p>
      </section>
    </div>
  );
}

export default Contact;
