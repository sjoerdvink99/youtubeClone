import React from "react";
import "./SearchPage.css";
import { TuneOutlined } from "@material-ui/icons";
import ChannelRow from "./ChannelRow";

export default function SearchPage() {
  return (
    <div className='searchPage'>
      <div className='searchPage__filter'>
        <TuneOutlined />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow
        image='https://yt3.ggpht.com/ytc/AAUvwninBO2clpS6QYtcm4OT2RrDbLL2a4uRW9YqpUbcDg=s176-c-k-c0x00ffffff-no-rj'
        channel='GaryVee'
        verified
        subs='2.98M'
        numOfVideos={932}
        description='Gary Vaynerchuk is the chairman of VaynerX, a modern-day media and communications holding company and the active CEO of VaynerMedia, a full-service advertising agency servicing Fortune 100 clients across the company’s 4 locations. '
      />
    </div>
  );
}
