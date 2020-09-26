import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { DaysEnum } from '../../types/DaysEnum';
import { PalinsestoData } from '../../types/PalinsestoData';


type DaysData = {
    name: DaysEnum;
    miniName: string;
};

const daysMini: DaysData[] = [
    { name: DaysEnum.Lunedi, miniName: "LUN" },
    { name: DaysEnum.Martedi, miniName: "MAR" },
    { name: DaysEnum.Mercoledi, miniName: "MER" },
    { name: DaysEnum.Giovedi, miniName: "GIO" },
    { name: DaysEnum.Venerdi, miniName: "VEN" },
    { name: DaysEnum.Sabato, miniName: "SAB" },
    { name: DaysEnum.Domenica, miniName: "DOM" }
];

export type PalinsestoDataModel = {
    id: string;
    day: DaysEnum;
    time: string;
    title: string;
    description: string;
    fullDescription: string
    image: string;
}

const Palinsesto = () => {
    const [selectedDay, setSelectedDay] = useState(DaysEnum.Lunedi);
    //  const [palData, setPalData] = useState<PalinsestoData[]>([]);
    const [palDataModel, setPalDataModel] = useState<PalinsestoDataModel[]>([]);

    useEffect(() => {
        async function LoadPalinsestoJson() {
            let response = await fetch(process.env.PUBLIC_URL + "/assets/palinsesto.json");
            let result: PalinsestoData[] = await response.json();

            //  setPalData(result);

            let finalArray: PalinsestoDataModel[] = [];
            result.forEach(el => {
                for (let index = 0; index < el.days.length; index++) {
                    let tempPalDataModel: PalinsestoDataModel = {
                        id: el.id,
                        day: el.days[index].day,
                        time: el.days[index].time,
                        title: el.title,
                        description: el.description,
                        fullDescription: el.fullDescription,
                        image: el.image
                    }
                    finalArray = [...finalArray, tempPalDataModel]
                }
            })
            //  console.log(finalArray)
            setPalDataModel(finalArray)
        }
        LoadPalinsestoJson();


        /*   console.log("useEffect")
           let result=fetch("/assets/palinsesto.json")
               .then((response) => { return response.json() })
               .then((response: PalinsestoData[]) => console.log(response));
           
           console.log(result)*/
    }, []);


    const DayMarkClickHandler = (day: DaysEnum) => {
        setSelectedDay(day);
    }

    return (
        <div className="palinsesto">
            <div className="palinsesto-header">
                <h3 >Il palinsesto di radio Finestraperta</h3>
                <p>Scopri il palinsesto settimanale di Radio Finestraperta dal lunedì alla domenica.</p>
                <div className="palinsesto-navbar"><ul>
                    {
                        daysMini.map((day, index) => {
                            return (
                                <li key={index} className={`${selectedDay === day.name ? "active" : ""}`} onClick={() => { DayMarkClickHandler(day.name) }}>{day.miniName}</li>
                            );
                        })
                    }
                </ul></div>
            </div>

            <div className="palinsesto-list">
                {
                    palDataModel.filter(p => p.day === selectedDay)
                        .sort((a, b) => a.time.localeCompare(b.time))
                        .map((day, index) => {
                            return (
                                <div key={index} className="palinsesto-list-item">
                                    <div className="palinsesto-item-timer">
                                        <p>{day.time}</p>
                                    </div>
                                    <div className="palinsesto-desc">
                                        <div className="palinsesto-title">
                                            <Link to={`/Programmi/${day.id}`}>{day.title}</Link>
                                        </div>
                                        <p>{day.description}</p>
                                    </div>
                                </div>
                            )
                        })
                }
            </div>
        </div>
    );
}

export default Palinsesto;