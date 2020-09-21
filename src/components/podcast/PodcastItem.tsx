import React, { useState } from "react";
import { PodcastData } from "../../types/PodcastData";



const PodcastItem = (podcastData: PodcastData) => {
    return (
        <div className="podcast-item">
            <h2 className="podcast-title">{podcastData.title}</h2>
            <p className="podcast-description">{podcastData.data}</p>
            <iframe className="mixcloud-podcast" src={podcastData.link}></iframe>
        </div>
    );
}

export default PodcastItem;