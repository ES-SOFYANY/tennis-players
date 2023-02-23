import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Actions from './home-actions';
import nock from 'nock';
import {PLAYER} from "../mocks/player";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('players actions', () => {

it('creates RECEIVE_PLAYERS after successfuly fetching players', (done) => {
        nock('http://localhost')
            .get('/players')
            .reply(200,
                [PLAYER]
            );
        const expectedActions = [
            {type: 'REQUEST_PLAYERS'},
            {type: 'RECEIVE_PLAYERS', players: [PLAYER]}
        ];
        const store = mockStore({players: []})

        store.dispatch(Actions.requestPlayersData()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
            done();
        })

    });
});