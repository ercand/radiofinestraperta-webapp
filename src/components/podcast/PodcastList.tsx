import React, { useEffect, useState } from "react";
import PodcastItem from "./PodcastItem";
import { LoadPodcastAsync } from '../../API';
import { PodcastData } from "../../types/PodcastData";

const PodcastList = () => {
    const [podcastDataList, setPodcastDataList] = useState<PodcastData[]>([]);
    const [elementToShow, setElementToShow] = useState(5);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function LoadPodcast() {
            let result = await LoadPodcastAsync();

            setPodcastDataList(result)
        }
        LoadPodcast();
    }, []);

    const ShowMoreClickHandler = () => {
        setIsLoading(true);
        setElementToShow(elementToShow + 3);
        setIsLoading(false);
    }

    return (
        <div className="podcast-page">
            <div className="podcast-list-header">
                <h2>I Podcast di Finestraperta</h2>
                <p>Tutti i nostri programmi sempre disponibili on demand.</p>
                <p>Da qui puoi riascoltare le singole puntate.</p>
            </div>
            <div className="podcast-list">
                <ul>
                    {
                        podcastDataList.slice(0, elementToShow).map((info, idx) => {
                            return <li className="podcast-list-item"><PodcastItem {...info} key={idx} /></li>
                        })
                    }
                </ul>
            </div>
            <div onClick={ShowMoreClickHandler} className={`podcast-list-show-more `}>
                <p className={isLoading ? "loading" : ""}>MOSTRA ALTRI</p>
            </div>
        </div>
    );
}

export default PodcastList;