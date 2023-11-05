import React, { useState } from "react";
import "./index.css";
import { Drawer } from "antd";
import OverviewFlow from "../Overflow";

function MainGraphical() {
  const [showDrawer, setShowDrawer] = useState(false);

  const handleClick = () => {
    setShowDrawer(true);
  };

  const onClose = () => {
    setShowDrawer(false);
  };

  const containerStyle = {
    position: 'relative',
    height: 200,
    padding: 48,
    overflow: 'hidden',
    textAlign: 'center',
    background: "purple",
    border: `1px solid red`,
    borderRadius: "30px",
  };

  return (
    <div className="main-graphical">
      <OverviewFlow />
      <button onClick={handleClick}>
        Open Drawer
      </button>
      <Drawer
        title="Basic Drawer"
        placement="right"
        closable={false}
        onClose={onClose}
        open={showDrawer}
        getContainer={false}
      >
        <p>Some contents...</p>
      </Drawer>
    </div>
  )
}

export default MainGraphical;
