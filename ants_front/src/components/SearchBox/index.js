import React from 'react';
import './style.css'; // CSS 파일 import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";


export default function SearchBox() {
  return (
    <div className="searchBox">
        <input type='text' className='searchInput' />
      <button className='searchBtn'> <FontAwesomeIcon icon={faMagnifyingGlass} /></button>
    </div>
  );
}
