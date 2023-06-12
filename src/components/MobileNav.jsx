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
    </Fragment>
  );
}

export default MobileNav;
