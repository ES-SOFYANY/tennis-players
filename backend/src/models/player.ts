import {PlayerData} from "./player-data";
import {Country} from "./country";

export interface Player {
    id: number;
    firstname: string;
    lastname: string;
    shortname: string;
    sex: string;
    country: Country;
    picture: string;
    data: PlayerData;
}
