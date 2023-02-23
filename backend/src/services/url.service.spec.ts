import {PlayersService} from './players.service';
import data from '../../data/headtohead.json';
import axios from "axios";

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('PlayersService', () => {

    const playersService = new PlayersService();
    mockedAxios.get.mockResolvedValue({data});

    describe('#getAllSortedPlayers', () => {
        it('should return all players sorted', async () => {
            const players = await playersService.getAllSortedPlayers();
            expect(players).toEqual(data.players)
            expect(players[0].id).toEqual(17)
            expect(players[1].id).toEqual(52)
            expect(players[2].id).toEqual(65)
            expect(players[3].id).toEqual(95)
            expect(players[4].id).toEqual(102)
        });
    })

    describe('#getOnePlayer', () => {
        it('should return one player', async () => {
            const player = await playersService.getOnePlayer(17);
            expect(player?.id).toBe(17);
            expect(player?.lastname).toBe('Nadal');
            expect(player?.firstname).toBe('Rafael');
        });

        it('should return undefined when there is no player', async () => {
            const player = await playersService.getOnePlayer(20);
            expect(player).toBeUndefined();
        });
    })

});
