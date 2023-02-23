import {PlayersService} from '../services/players.service';
import {PlayersController} from './players.controller';
import {Request, Response} from 'express';

const getAllSortedPlayers = jest.fn();
const getOnePlayer = jest.fn(() => ({id: 3}));
jest.mock('../services/players.service', () => {
    return {
        PlayersService: jest.fn().mockImplementation(() => {
            return {
                getAllSortedPlayers,
                getOnePlayer,
            };
        })
    };
});

describe('PlayersController', () => {
    const mockPlayersService = jest.mocked(PlayersService);

    beforeEach(() => {
        mockPlayersService.mockClear();
    });
    const playersController = new PlayersController();


    describe('#getAllSortedPlayers', () => {
        const res = {
            send: jest.fn()
        }
        it('should call getAllSortedPlayers', async () => {
            expect(getAllSortedPlayers).not.toHaveBeenCalled();
            await playersController.getAllSortedPlayers({} as unknown as Request, res as unknown as Response);
            expect(res.send).toHaveBeenCalled();
            expect(getAllSortedPlayers).toHaveBeenCalled();
        });
    })

    describe('#getOnePlayer', () => {
        const res = {
            send: jest.fn(),
            status: jest.fn(() => ({send: jest.fn()}))
        }
        it('should call getOnePlayer', async () => {
            expect(getOnePlayer).not.toHaveBeenCalled();
            await playersController.getOnePlayer({params: {id: 3}} as unknown as Request, res as unknown as Response);
            expect(res.send).toHaveBeenCalledWith({id: 3});
            expect(getOnePlayer).toHaveBeenCalled();
        });
    })
});
