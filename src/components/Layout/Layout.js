import React from 'react';

import Navbar from './Navbar';

const TemplateWrapper = ({ children }) => (
  <div className="screen">

    <Navbar />
    <div className="page">{children}</div>
  </div>
);

export default TemplateWrapper;
