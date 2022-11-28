import React from 'react'
import { Link } from 'react-router-dom';
import { FcAssistant } from 'react-icons/fc'
import { GiAbstract038, GiAbstract012 } from "react-icons/gi";
import { BsFillArrowDownCircleFill } from "react-icons/bs";

const Home = () => {
  return (
    <div className="home">
      <div className="banner">
        <div className="headline">
          <h1>Welcome to the principal page</h1>
        </div>
        <div className="home-icon">
          <FcAssistant />
        </div>
        <div className="clients-banner">
          <h1>Our clients</h1>
          <a href="#clients">
            <BsFillArrowDownCircleFill />
          </a>
        </div>
        <div className="clients" id="clients">
          <Link to="/viamo">
            <div className="item">
              <div className="image-item">
                <GiAbstract038 />
              </div>
              <div className="title-client">
                <h3>Viamo</h3>
              </div>
            </div>
          </Link>
          <Link to="/nebula">
            <div className="item">
              <div className="image-item">
                <GiAbstract012 />
              </div>
              <div className="title-client">
                <h3>Nebula</h3>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home