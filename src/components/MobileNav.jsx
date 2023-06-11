import React, { Fragment, useState } from "react";
import MenuIcon from "./MenuIcon";
import "./MobileNav.css";
import Xmenu from "./Xmenu";

function MobileNav() {
  const [showNav, setShowNav] = useState(false);

  const showNavHandle = () => {
    setShowNav((onshow) => !onshow);
  };

  return (
    <Fragment>
      <div className="xmenu">
        {!showNav ? (
          <MenuIcon onShowNav={showNavHandle} />
        ) : (
          <Xmenu onShowNav={showNavHandle} />
        )}
      </div>
      {/* {showNav && (
        <div className="mobilewrapper">
          <div className="xmenu">
            <Xmenu onShowNav={showNavHandle} />
          </div>

          <ul className="mobilenav">
            <li className="navlist">
              <a href="./">Facebook </a>
            </li>
            <li className="navlist">
              <a href="./">Twitter </a>
            </li>
          </ul>
        </div>
      )} */}
    </Fragment>
  );
}

export default MobileNav;
