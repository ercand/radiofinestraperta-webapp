import { PalinsestoData } from "./types/PalinsestoData";
import { PodcastData } from "./types/PodcastData";


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
/*
export const searchCharactersFromApi = (term: String): Promise<any> => {
    return axios.get(`${baseUrl}/people/?search=${term}`);
}*/