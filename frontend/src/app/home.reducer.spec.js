import HomeReducer from './home-reducer';
import {PLAYER} from "../mocks/player";

const INITIAL_STATE = {
    players: [],
    isLoading: false
};
const STATE_LOADING_PLAYERS = {
    players: [],
    isLoading: true
};
const STATE_WITH_PLAYERS = {
    players: [PLAYER],
    isLoading: false
};

describe('Home reducer', () => {

    it('should return the initial state', () => {
        expect(HomeReducer(undefined, {})).toEqual(INITIAL_STATE);
    });

    it('should handle REQUEST_PLAYERS', () => {
        expect(
            HomeReducer([], {
                type: 'REQUEST_PLAYERS'
            })
        ).toEqual(STATE_LOADING_PLAYERS);
    });

    it('should handle RECEIVE_PLAYERS', () => {
        expect(
            HomeReducer(STATE_LOADING_PLAYERS,
                {
                    type: 'RECEIVE_PLAYERS',
                    players: [PLAYER]
                }
            )
        ).toEqual(STATE_WITH_PLAYERS)
    })
});