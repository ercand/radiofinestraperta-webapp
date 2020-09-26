import React from 'react';
import { useState } from 'react';
import {  Route, Switch, useHistory } from 'react-router-dom';

import './App.scss';
import BottomRadioWidget from './components/BottomRadioWidget';
import Drawer from './components/Drawer';
import Home from './components/Home';
import Palinsesto from './components/palinsesto/Palinsesto';
import Programmi from './components/programmi/Programma';
import PodcastList from './components/podcast/PodcastList';


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
  return (
    <div className="main">
      <div className="content">
        <Switch>
          <Route exact path="/" component={Home}  />
          <Route exact path="/Programmi/:slug" component={Programmi} />
          <Route exact path="/Palinsesto" component={Palinsesto} />
          <Route exact path="/Podcasts" component={PodcastList} />
        </Switch>
      </div>
      <div style={{ position: "fixed", bottom: "0px", width: "100%" }}>
        <BottomRadioWidget onClick={OpenDrawerHandler} />
        <Drawer isOpen={isDrawerOpen} onClickMenu={OnCickDrawerMenuHandler} onClick={CloseDrawerHandler} />
      </div>
    </div>
  );
}

export default App;
