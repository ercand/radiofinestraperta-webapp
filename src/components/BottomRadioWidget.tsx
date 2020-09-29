import React, { useState } from 'react';
import { FaPauseCircle } from "react-icons/fa"
import { FaPlayCircle } from "react-icons/fa"
import { CgMenuRound } from "react-icons/cg"

type ButtonRadiowidgetProps = {
    /** callback function passed to the onClick handler*/
    onClick: ()  => void;
}
  
const BottomRadioWidget = (props:ButtonRadiowidgetProps) => {
    const url = "https://nr6.newradio.it/proxy/sexionel?mp=/stream";//("http://94.23.67.172:9114/stream.mp3");
    const [audio,setAudio] = useState(new Audio(url));
    const [isPlaying, setIsPlaying] = useState<boolean>(false);


    const onPlayOrPause = () => {
        if (isPlaying) {
            setIsPlaying(false);
            audio.pause();
        }
        else {
            setIsPlaying(true);
            audio.play();
        }
    }

    const OnMenuClick = () => {
        props.onClick();
        console.log("clikc menu");
    }
    return (
        <div className="bottom-bar-navigation">
            <div className="nav-item img-cover">
                <img src="https://is4-ssl.mzstatic.com/image/thumb/Music123/v4/be/38/d0/be38d058-31ed-c0ea-91e6-12052865fd20/source/100x100bb.jpg" alt="song-cover"></img>
            </div>
            <div className="nav-item">
                <div className="player-box">
                    <div className="song-info">
                        <div className="artist-name">Jack Johnson</div>
                        <div className="song-name"> Upside Down</div>
                    </div>
                    <div onClick={onPlayOrPause} style={{ flex: "1 1 0%", textAlign: "center" }}>
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

