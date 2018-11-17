import React from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";

const TemplateWrapper = ({ children }) => (
  <div className="screen">
    <Navbar />
    <div className="page">{children}</div>
    <Footer />
  </div>
);

export default TemplateWrapper;
