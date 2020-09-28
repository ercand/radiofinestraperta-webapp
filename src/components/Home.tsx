import React, { useEffect, useState } from 'react';


const parseHistorySongs = () => {
    let headers = new Headers();

    /*  headers.append('Content-Type', 'application/json');
      headers.append('Accept', 'application/json');
      headers.append('Access-Control-Allow-Origin', 'https://www.aionbot.net/radio');
      headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
      headers.append('Access-Control-Allow-Headers', 'Content-Type, Authorization');*/
    const url = "https://www.aionbot.net/radio";

    // Website you wish to allow to connect
    headers.append('Access-Control-Allow-Origin', "*");

    // Request methods you wish to allow
//    headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
//    headers.append('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
//    headers.append("Content-Type", "application/json");
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    //   headers.append('Access-Control-Allow-Credentials', 'false');
    var result44 = fetch(url)
        .then(resp => {
            console.log(resp)
            return resp.json()
        })
        .then(r2 => {
            console.log(r2)
            return r2
        });

}

const Home = () => {
    const [useUno, setUseUno] = useState(0);
    parseHistorySongs()
    /*
        useEffect(() => {
            console.log("use effect 2")
         //   setUseDue(useDue + 1);
        })*/



    return (
        <div className="home-player">
            <div className="player-header">
                <div className="cover">
                    <img src="http://static.stereogum.com/blogs.dir/2/files/2011/12/Adele-21.jpg" alt="" className="cover-img" />
                </div>
            </div>
            <div className="recent-song">
                <div className="song-box">
                    <div className="song-cover">
                        <img src="http://static.stereogum.com/blogs.dir/2/files/2011/12/Adele-21.jpg" alt="song-cover" />
                    </div>
                    <div className="song-info">
                        <h4 className="song name">Upside Down</h4>
                        <p className="song-author">Jack Johnson</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;