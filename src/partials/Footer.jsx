import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

function Footer(props) {
  return (
    <div className="footer">
      <h2>Made with
        <FontAwesomeIcon icon={['fas', 'heart']} color="red" />
      from v-man
      </h2>
    </div>
  );
}

export default Footer;

// <div>
//   <h1 className="name">
//     <span className="tag">&lt; </span>
//     Footer
//         <span className="tag"> /&gt;</span>
//   </h1>
// </div>
