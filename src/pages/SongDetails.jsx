/* eslint-disable quotes */
import React from "react";
import { useParams } from "react-router-dom";

const SongDetails = () => {
  const { songid } = useParams();
  return <div>SongDetails {songid}</div>;
};

export default SongDetails;
