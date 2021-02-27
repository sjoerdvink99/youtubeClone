import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import {
  History,
  Home,
  PlayCircleFilled,
  Subscriptions,
  VideoLibrary,
  WatchLater,
  Whatshot,
} from "@material-ui/icons";

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <SidebarRow Icon={Home} title='Home' />
      <SidebarRow Icon={Whatshot} title='Trending' />
      <SidebarRow Icon={Subscriptions} title='Abonnementen' />
      <hr />
      <SidebarRow Icon={VideoLibrary} title='Bibliotheek' />
      <SidebarRow Icon={History} title='Geschiedenis' />
      <SidebarRow Icon={PlayCircleFilled} title="Je video's" />
      <SidebarRow Icon={WatchLater} title='Later bekijken' />
    </div>
  );
}
