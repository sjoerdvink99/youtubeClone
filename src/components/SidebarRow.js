import React from "react";
import "./Sidebar.css";

export default function SidebarRow({ Icon, title }) {
  return (
    <div className='sidebarRow'>
      {Icon && <Icon style={{ color: "gray" }} />}
      <h5>{title}</h5>
    </div>
  );
}
