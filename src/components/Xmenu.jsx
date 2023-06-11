import React from "react";
import "./menubar.css";

function Xmenu({ onShowNav }) {
  return (
    <div onClick={onShowNav} className="svg">
      <i className="fa-solid fa-xmark"></i>
    </div>
  );
}

export default Xmenu;
