import React, { useState } from "react";
import data from '../../assets/podcasts/podcast2020.json'
import PodcastItem from "./PodcastItem";

const PodcastList = () => {
    return (
        <div className="podcast-list">
            {data.slice(0, 5).map((info, idx) => {
                return <PodcastItem data={info.description} title={info.title} link={info.link} key={idx} />
            })}
        </div>
    );
}

export default PodcastList;