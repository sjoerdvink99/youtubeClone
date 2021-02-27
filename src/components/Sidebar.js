import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import {
  ExpandMoreOutlined,
  History,
  Home,
  PlayCircleFilled,
  Subscriptions,
  ThumbUpAltOutlined,
  VideoLibrary,
  WatchLater,
  Whatshot,
} from "@material-ui/icons";

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <SidebarRow selected Icon={Home} title='Home' />
      <SidebarRow Icon={Whatshot} title='Trending' />
      <SidebarRow Icon={Subscriptions} title='Abonnementen' />
      <hr />
      <SidebarRow Icon={VideoLibrary} title='Bibliotheek' />
      <SidebarRow Icon={History} title='Geschiedenis' />
      <SidebarRow Icon={PlayCircleFilled} title="Je video's" />
      <SidebarRow Icon={WatchLater} title='Later bekijken' />
      <SidebarRow Icon={ThumbUpAltOutlined} title='Vind ik leuks' />
      <SidebarRow Icon={ExpandMoreOutlined} title='Meer' />
      <hr />
    </div>
  );
}
