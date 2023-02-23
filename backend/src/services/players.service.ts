import axios from 'axios';
import {Player} from '../models/player';

const URL_API = "https://eurosportdigital.github.io/eurosport-node-developer-recruitment/headtohead.json";

export class PlayersService {
    async getAllSortedPlayers(): Promise<Player[]> {
        try {
            const response = await axios.get<{ players: Player[] }>(URL_API);
            return response.data.players.sort((playerOne: Player, playerTwo: Player) => playerOne.id - playerTwo.id);
        } catch (err) {
            throw Error('error')
        }
    }

    async getOnePlayer(id: number): Promise<Player | undefined> {
        try {
            const response = await axios.get<{ players: Player[] }>(URL_API);
            return response.data.players.find((player: Player) => player.id == id);
        } catch (err) {
            throw Error('error')
        }
    }

}
