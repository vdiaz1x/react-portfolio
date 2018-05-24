import React from 'react';

function Header(props) {
  return (
    <div>
      <h1 className="name">
        <span className="tag">&lt; </span>
        Name
        <span className="tag"> /&gt;</span>
      </h1>
    </div>
  );
}

export default Header;
