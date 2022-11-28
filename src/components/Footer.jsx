import React from 'react'
import { Link } from 'react-router-dom';
import { GoMarkGithub } from "react-icons/go";
import { FcDepartment } from 'react-icons/fc';

const Footer = () => {
  return (
    <div className="Footer">
      <Link to="/">
        <div className="logo-footer">
          <span className="loco-icon">
            <FcDepartment />
          </span>
          <span className="logo-text-1">simula</span>
          <span className="logo-text-2">cr.</span>
        </div>
      </Link>
      <div>
        Made By {" "}
        <a href="https://github.com/CarlosD95" target="blank" rel="noreferrer">
          <span className="github">
            <GoMarkGithub /> CarlosD95
          </span>
        </a>
      </div>
      <div className="copyright">
        &#169; Copyright 2022
        <br />
        All rights reserved.
      </div>
    </div>
  );
};

export default Footer