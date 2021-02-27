import { Avatar } from "@material-ui/core";
import { VerifiedUserOutlined } from "@material-ui/icons";
import React from "react";
import "./ChannelRow.css";

export default function ChannelRow({
  image,
  channel,
  subs,
  verified,
  numOfVideos,
  description,
}) {
  return (
    <div className='channelRow'>
      <Avatar className='channelRow__logo' src={image} alt={channel} />
      <div className='channelRow__text'>
        <h4>
          {channel} {verified && <VerifiedUserOutlined />}
        </h4>
        <p>
          {subs} subscribers - {numOfVideos} videos
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
}
