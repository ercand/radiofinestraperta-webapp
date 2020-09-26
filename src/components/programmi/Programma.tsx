import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PalinsestoData } from '../../types/PalinsestoData';
import { FaRegClock, FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { PodcastData } from '../../types/PodcastData';
import { LoadPodcastAsync, LoadPalinsestoAsync } from '../../API';


interface ProgrammaUrlParams {
    slug: string;
}
interface PodcastDataVisibility extends PodcastData {
    showFullDescription: boolean;
}

const Programma = () => {
    const [palinsestoInfo, setPalinsestoInfo] = useState<PalinsestoData>();
    const [podcastDataList, setPodcastDataList] = useState<PodcastData[]>([]);
    const [podcastDataListVisibility, setPodcastDataListVisibility] = useState<PodcastDataVisibility[]>([]);
    const { slug } = useParams<ProgrammaUrlParams>();

    useEffect(() => {
        // 
        async function LoadPalinsesto() {
            let result = await LoadPalinsestoAsync();

            let findValue = result.find(p => {
                return p.id === slug;
            })

            setPalinsestoInfo(findValue)
        }
        LoadPalinsesto();

        //
        async function LoadPodcastBySlug() {
            let result = await LoadPodcastAsync();

            // Tutti i podcast che coincidono con lo slug passato
            let podcastList = result.filter(p => {
                return p.transmissionId === slug;
            })

            const extendedPodcastData: PodcastDataVisibility[] = podcastList.map((el) => { return { ...el, showFullDescription: false }; });
            setPodcastDataListVisibility(extendedPodcastData);

            setPodcastDataList(podcastList)
            console.log(podcastList)
        }
        LoadPodcastBySlug();
    }, [slug]);

    const [isProgramDescriptionVisible, setIsFullDescriptionVisible] = useState(false);

    const infoClickHandler = () => {
        setIsFullDescriptionVisible(!isProgramDescriptionVisible);
    }

    // Converte il Date in una stringa
    const DateTimeToString = (date: string): string => {
        let datet = new Date(date,);
        return datet.toLocaleString('default', { day: 'numeric', month: 'long', year: 'numeric' });
    }

    // Cambia lo stato di visibilità del podcast nella sezione archivio
    const podcastItemShowDescriptionHandler = (index: number) => {
        let newValues = podcastDataListVisibility.map((d, i) => {
            if (i === index) {
                d.showFullDescription = !d.showFullDescription;
            }
            return d;
        });
        setPodcastDataListVisibility(newValues);
    }


    return (
        <>
            <div className="programma-details">
                {palinsestoInfo &&
                    <>
                        <div className="header">
                            <p><FaRegClock />Da Lunedì a Venerdì, ore 11.30</p>
                            <h1>{palinsestoInfo.title}</h1>
                            <div className="info">
                                <div className="show-description-button">
                                    <span onClick={infoClickHandler}>INFO &nbsp;{isProgramDescriptionVisible ? <FaAngleUp /> : <FaAngleDown />}</span>
                                </div>
                                <div className={`description ${isProgramDescriptionVisible ? "show" : ""}`}>
                                    <div dangerouslySetInnerHTML={{ __html: palinsestoInfo?.fullDescription }}></div>
                                </div>
                            </div>
                        </div>
                    </>
                }
                <div className="podcasts">
                    <div className="last-podcast">
                        {podcastDataList && podcastDataList.length > 0 &&
                            <>
                                <h2> Ultima puntata</h2>
                                <h3>{DateTimeToString(podcastDataList[0].data)}</h3>
                                <p>{podcastDataList[0].description}</p>
                                <iframe title={podcastDataList[0].title + "last"} className="mixcloud-podcast" src={podcastDataList[0].link} height="60px"></iframe>
                            </>
                        }
                    </div>
                    <div className="podcast-archive">
                        <div className="podcast-archive-header">
                            <h2>Archivio podcast</h2>
                            <div className="podcast-archive-minimenu">
                                
                            </div>
                        </div>
                        <ul className="podcast-archive-list">
                            {podcastDataListVisibility && podcastDataListVisibility.map((el, index) => {
                                return (
                                    <li key={`item-${index}`} className="podcast-archive-list-item">
                                        <div className="archive-item-header" onClick={() => podcastItemShowDescriptionHandler(index)}>
                                            <div>
                                                <p className="podcast-date">{DateTimeToString(el.data)}</p>
                                                <p className="podcast-short-title">{el.shortTitle}</p>
                                            </div>
                                            {el.showFullDescription ? <FaAngleUp /> : <FaAngleDown />}
                                        </div>
                                        <div className={`desc-content ${el.showFullDescription ? "show" : ""}`}>
                                            <p>{el.description}</p>
                                            <iframe title={`mixcloud-${index}`} className="mixcloud-podcast" src={el.link} height="60px"></iframe>
                                        </div>
                                    </li>
                                )
                            })}

                        </ul>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Programma;