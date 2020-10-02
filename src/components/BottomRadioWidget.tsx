import React, { Fragment, useState } from 'react';
import { FaPauseCircle } from "react-icons/fa"
import { FaPlayCircle } from "react-icons/fa"
import { CgMenuRound } from "react-icons/cg"
import { SoundHistory } from '../types/SoundHistory';

type ButtonRadiowidgetProps = {
    /** callback function passed to the onClick handler*/
    currentSong: SoundHistory;
    onMenuClick: () => void;
    onPlayClick: (isRadioAudioOn: boolean) => void;
}

const BottomRadioWidget = (props: ButtonRadiowidgetProps) => {
    const [isPlaying, setIsPlaying] = useState<boolean>(false);


    const onPlayOrPause = () => {
        if (isPlaying) {
            setIsPlaying(false);
            props.onPlayClick(false);
        }
        else {
            setIsPlaying(true);
            props.onPlayClick(true);
        }
    }

    const OnMenuClick = () => {
        props.onMenuClick();
    }

    return (
        <div className="bottom-bar-navigation">
            <div className="player-box">
                <div className="song-info">
                    {
                        props.currentSong &&
                        <Fragment>
                            <div className="artist-name">{props.currentSong.author}</div>
                            <div className="song-name">{props.currentSong.title}</div>
                        </Fragment>
                    }
                </div>
                <div className="player-buttons">
                    <div className="playpause-button" onClick={onPlayOrPause} >
                        {isPlaying ? <FaPauseCircle size="56" /> : <FaPlayCircle size="56" />}
                    </div>
                    <div className="menu-button">
                        <CgMenuRound size="64" onClick={OnMenuClick} />
                    </div>
                </div>
            </div>
        </div>
    );
}


export default BottomRadioWidget;

