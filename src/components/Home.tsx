import React, { useEffect, useState } from 'react';
import { LoadSoundHistoryAsync } from '../API';
import { SoundHistory } from '../types/SoundHistory';

const Home = () => {
    const [songHistoryData, setSongHistoryData] = useState<SoundHistory[]>([]);

    useEffect(() => {

        async function LoadSongHistory() {
            const songHistory = await LoadSoundHistoryAsync();
            setSongHistoryData(songHistory);
            console.log(songHistory)

        }
        LoadSongHistory();
    }, [])



    return (
        <div className="home-player">
            <div className="player-header">
                <div className="cover">
                    <img src="http://static.stereogum.com/blogs.dir/2/files/2011/12/Adele-21.jpg" alt="" className="cover-img" />
                </div>
            </div>
            <div className="recent-song">
                {songHistoryData &&
                    songHistoryData.map((e, idx) => {
                        if (idx === 0) {
                        }
                        else {
                            return (
                                <div className="song-box" key={`song-box${idx}`}>
                                    <div className="song-cover">
                                        <img src="http://static.stereogum.com/blogs.dir/2/files/2011/12/Adele-21.jpg" alt="song-cover" />
                                    </div>
                                    <div className="song-info">
                                        <h4 className="song name">{e.title}</h4>
                                        <p className="song-author">{e.author.toLowerCase()}</p>
                                    </div>
                                </div>
                            )
                        }
                    })
                }

            </div>
        </div>
    );
}

export default Home;