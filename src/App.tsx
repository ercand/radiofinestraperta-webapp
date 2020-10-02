import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';

import './App.scss';
import BottomRadioWidget from './components/BottomRadioWidget';
import Drawer from './components/Drawer';
import Home from './components/Home';
import Palinsesto from './components/palinsesto/Palinsesto';
import Programmi from './components/programmi/Programma';
import PodcastList from './components/podcast/PodcastList';
import { SoundHistory } from './types/SoundHistory';
import { LoadSoundHistoryAsync } from './API';


function App() {
  let history = useHistory();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const OpenDrawerHandler = () => {
    setIsDrawerOpen(true);
  }

  const CloseDrawerHandler = () => {
    setIsDrawerOpen(false);
  }


  const OnCickDrawerMenuHandler = (index: string) => {
    history.push(index)
    setIsDrawerOpen(false);
  }


  const [songHistoryData, setSongHistoryData] = useState<SoundHistory[]>([]);

  useEffect(() => {
    /*
          fetch("https://www.aionbot.net/radio")
              .then(response=> response.json())
              .then(response=> console.log(response));
          */
    async function LoadSongHistory() {
      const songHistory = await LoadSoundHistoryAsync();
      setSongHistoryData(songHistory);
      console.log(songHistory)

    }
    LoadSongHistory();
  }, [])

  // Radio
  const url = "https://nr6.newradio.it/proxy/sexionel?mp=/stream";//("http://94.23.67.172:9114/stream.mp3");
  const audio = useRef<HTMLAudioElement>(null);
  const [isPlayingRadio, setIsPlayingRadio] = useState(false);
  const [src, setSrc] = useState(url);

/*
  const playWidgetHandler = (isRadioAudioOn: boolean) => {
    if (isRadioAudioOn) {
      setIsPlayingRadio(isRadioAudioOn);
   //   audio.src = url;
      audio.play();
    }
    else {
      setIsPlayingRadio(isRadioAudioOn);
      audio.pause();
      //audio.src = "";
    }
  }*/
  const playWidgetHandler = (): void => {
    if (audio !== null && audio.current !== null) {
      const audioCurrent = audio.current
      if (audioCurrent.paused && audioCurrent.src) {
        setIsPlayingRadio(true);
        audioCurrent.src = src;
        playAudioPromise()
      } else if (!audioCurrent.paused) {
        setIsPlayingRadio(false);
        audioCurrent.src = "./assets/silence_64kb.mp3";
        audioCurrent.pause()
      }
    }
  }

  /**
   * Safely play audio
   *
   * Reference: https://developers.google.com/web/updates/2017/06/play-request-was-interrupted
   */
  const  playAudioPromise = (): void => {
    if (audio !== null && audio.current !== null) {
      audio.current
        .play()
        .then(null)
        .catch((err) => {
          // const { onPlayError } = props
          //   onPlayError && onPlayError(new Error(err))
        })
    }
  }


  return (
    <div className="main">
      <div className="content">
        <Switch>
          <Route exact path="/" render={() => <Home isPlaying={isPlayingRadio} songHistoryData={songHistoryData} />} />
          <Route exact path="/Programmi/:slug" component={Programmi} />
          <Route exact path="/Palinsesto" component={Palinsesto} />
          <Route exact path="/Podcasts" component={PodcastList} />
        </Switch>
      </div>
      <div style={{ position: "fixed", bottom: "0px", width: "100%" }}>
        <BottomRadioWidget currentSong={songHistoryData && songHistoryData[0]} onMenuClick={OpenDrawerHandler} onPlayClick={playWidgetHandler} />
        <Drawer isOpen={isDrawerOpen} onClickMenu={OnCickDrawerMenuHandler} onClick={CloseDrawerHandler} />
        <audio
          src={src}
          controls={false}
          loop={false}
          autoPlay={false}
          preload={"false"}
          crossOrigin={"trur"}
          ref={audio}
          hidden={true}
        >
        </audio>
      </div>
    </div>
  );
}

export default App;
