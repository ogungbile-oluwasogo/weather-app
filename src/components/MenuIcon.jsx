import React from "react";
import "./menubar.css";

function MenuIcon({ onShowNav }) {
  return (
    <div onClick={onShowNav} className="svg">
      <i className="fa-solid fa-bars"></i>
    </div>
  );
}

export default MenuIcon;
