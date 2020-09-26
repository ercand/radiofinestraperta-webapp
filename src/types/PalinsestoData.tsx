import { DaysEnum } from "./DaysEnum";


export interface PalinsestoData {
    id: string;
    days: Day[];
    title: string;
    description: string;
    fullDescription:string
    image: string;
}


export interface Day {
    day:  DaysEnum;
    time: string;
}
