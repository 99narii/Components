import React from 'react';
import './style.css'; // CSS 파일 import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHouse, faMagnifyingGlass,faFolder,faUser,faEnvelope,faGear } from "@fortawesome/free-solid-svg-icons";


function Sidebar() {
  return (
    <div className="sidebar">
      <a href="/"> <FontAwesomeIcon icon={faHouse} /></a>
      <a href="/"> <FontAwesomeIcon icon={faMagnifyingGlass} /></a>
      <a href="/about"><FontAwesomeIcon icon={faFolder} /></a>
      <a href="/"> <FontAwesomeIcon icon={faEnvelope} /></a>
      <a href="/contact"><FontAwesomeIcon icon={faUser} /></a>
      <a href="/"> <FontAwesomeIcon icon={faGear} /></a>
    </div>
  );
}

export default Sidebar;
