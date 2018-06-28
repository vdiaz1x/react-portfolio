import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

function Contact() {
  return (
    <div className="contact">
      <h1 className="name">
        <span className="tag">&lt; </span>
        Contact
        <span className="tag"> /&gt;</span>
      </h1>
      <section className="contact_list">
        <a className="contact_item" href="mailto:vdiaz1x@gmail.com">
          <FontAwesomeIcon icon={['far', 'envelope']} size="3x" />
        </a>
        <a className="contact_item" href="https://www.linkedin.com/in/vinicio-diaz/">
          <FontAwesomeIcon icon={['fab', 'linkedin-in']} size="3x" />
        </a>
        <a className="contact_item" href="https://github.com/vdiaz1x">
          <FontAwesomeIcon icon={['fab', 'github']} size="3x" />
        </a>
      </section>
    </div>
  );
}

export default Contact;
