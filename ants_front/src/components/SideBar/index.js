import React, { useState } from 'react';
import './style.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHouse, faMagnifyingGlass,faFolder,faUser,faEnvelope,faGear } from "@fortawesome/free-solid-svg-icons";


function Sidebar() {
  const [isOpen, setIsOpen] = useState(false); // 토글 기능 사용

  const toggleSidebar = (event) => {
    event.preventDefault(); // <a> 태그의 기본 동작을 막기
    setIsOpen(!isOpen); // isOpen state를 업데이트
  };

  return (
    <div className="slidebar">
      <a href="/" onClick={toggleSidebar}> <FontAwesomeIcon icon={faHouse} /></a>
      {/* isOpen 상태에 따라서 나머지 아이콘들 보여지기. */}
      {isOpen && (
        <>
          <a href="/"> <FontAwesomeIcon icon={faMagnifyingGlass} /></a>
          <a href="/about"><FontAwesomeIcon icon={faFolder} /></a>
          <a href="/"> <FontAwesomeIcon icon={faEnvelope} /></a>
          <a href="/contact"><FontAwesomeIcon icon={faUser} /></a>
          <a href="/"> <FontAwesomeIcon icon={faGear} /></a>
        </>
      )}
    </div>
  );
}

export default Sidebar;