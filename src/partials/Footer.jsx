import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

function Footer() {
  return (
    <div className="footer">
      <h2>
        Made with
        <FontAwesomeIcon className="icon" icon={['fas', 'heart']} color="red" />
        by vdiaz
      </h2>
    </div>
  );
}

export default Footer;
