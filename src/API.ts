import { PalinsestoData } from "./types/PalinsestoData";
import { PodcastData } from "./types/PodcastData";
import { SoundHistory } from "./types/SoundHistory";


export const LoadPalinsestoAsync = async (): Promise<PalinsestoData[]> => {
    try {
        let response = await fetch("/assets/palinsesto.json");
        let result: PalinsestoData[] = await response.json();
        return result;
    } catch (error) {
        console.log("Errore in LoadPalinsestoJson", error);
        return {} as PalinsestoData[];
    }

}

export const LoadPodcastAsync = async (): Promise<PodcastData[]> => {
    try {
        let response = await fetch("/assets/podcasts/podcast2020.json");
        let result: PodcastData[] = await response.json();
        return result;
    }
    catch (error) {
        console.log("Errore in LoadPodcastJson", error);
        return {} as PodcastData[];
    }
}

export const LoadSoundHistoryAsync = async (): Promise<SoundHistory[]> => {
    try {
        let response = await fetch("https://www.aionbot.net/radio");
        let result: SoundHistory[] = await response.json();
        return result;
    }
    catch (error) {
        console.log("Errore in LoadSoundHistoryAsync", error);
        return {} as SoundHistory[];
    }
}
/*
export const searchCharactersFromApi = (term: String): Promise<any> => {
    return axios.get(`${baseUrl}/people/?search=${term}`);
}*/