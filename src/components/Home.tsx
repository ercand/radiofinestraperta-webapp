import React, { Fragment } from 'react';
import { SoundHistory } from '../types/SoundHistory';

interface HomeProps {
    songHistoryData: SoundHistory[];
    isPlaying: boolean;
}

const Home = (props: HomeProps) => {

    return (
        <div className="home-player">
            <div className="player-header">
                <div className={`cover ${props.isPlaying ? "isPlay" : ""}`}>
                    {props.songHistoryData &&props.songHistoryData.length>0 &&
                        <img src={props.songHistoryData[0].coverUrl} alt="" className="cover-img" />
                    }
                </div>
            </div>
            <div className="recent-song">
                {props.songHistoryData &&
                    props.songHistoryData.map((e, idx) => {
                        if (idx !== 0) {
                            return (
                                <div className="song-box" key={`song-box${idx}`}>
                                    <div className="song-cover">
                                        <img src={e.coverUrl === "" ? "./assets/img/music-player.png" : e.coverUrl} alt="song-cover" />
                                    </div>
                                    <div className="song-info">
                                        <h4 className="song name">{e.title}</h4>
                                        <p className="song-author">{e.author}</p>
                                    </div>
                                </div>
                            )
                        }
                        else return <Fragment key={`song-box${idx}`}></Fragment>
                    })
                }
            </div>
        </div>
    );
}

export default Home;