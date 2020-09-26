import React from "react";
import { PodcastData } from "../../types/PodcastData";


// Converte il Date in una stringa
const DateTimeToString = (date: string): string => {
    let datet = new Date(date,);
    return datet.toLocaleString('default', { day: 'numeric', month: 'long', year: 'numeric' });
}

const PodcastItem = ( podcastData: PodcastData ) => {
    return (
        <div className="podcast-item">
            <h2 className="podcast-title">{podcastData.shortTitle}</h2>
            <p className="podcast-description">{DateTimeToString(podcastData.data)}</p>
            <p>{podcastData.description}</p>
            <iframe title={podcastData.title}  className="mixcloud-podcast" src={podcastData.link} height="60px"></iframe>
        </div>
    );
}

export default PodcastItem;