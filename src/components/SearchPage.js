import React from "react";
import "./SearchPage.css";
import { TuneOutlined } from "@material-ui/icons";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

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
      <hr />
      <VideoRow
        views='298.837'
        subs='2.98M'
        description='Gary Vaynerchuk is a serial entrepreneur and the CEO and founder of VaynerMedia, a full-service digital agency servicing Fortune 500 clients across the company’s 5 locations'
        timestamp='3 days ago'
        channel='GaryVee'
        title='The Secret To WINNING IN LIFE - Gary Vaynerchuk | Motivational Talk'
        image='https://miro.medium.com/max/2625/1*cy6aQQ8R0Rotd5Qi1kIbRw.png'
      />
      <VideoRow
        views='549.796'
        subs='2.98M'
        description='My friends … in 2019 let’s all make more of a commitment to understand that happiness is the ultimate ROI.'
        timestamp='2 feb. 2021'
        channel='GaryVee'
        title='5 Tips to Hustle Without Burning Out'
        image='https://stpetecatalyst.com/wp-content/uploads/2018/02/151204-DailyVee_Episode_001_02_1920x1080.jpg'
      />
      <VideoRow
        views='52.404'
        subs='2.98M'
        description='A common mistake people make when building their online brand is they think way too transactionally and sales-focused around their content. In this 4Ds business consulting session, Gary breaks down how to think about creating content with the hopes of it leading to sales, without the content being "right hooks" and sales pitches to everyone watching.'
        timestamp='21 jan. 2021'
        channel='GaryVee'
        title='How to Monetize Your Social Media Without Being Salesy | Inside 4Ds'
        image='https://s3.amazonaws.com/gv2016wp/wp-content/uploads/20150701163214/AGV-Thumbnail-114b.jpg'
      />
    </div>
  );
}
