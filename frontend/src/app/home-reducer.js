const REQUEST_PLAYERS = 'REQUEST_PLAYERS';
const RECEIVE_PLAYERS = 'RECEIVE_PLAYERS';

const INITIAL_STATE = {
    isLoading: false,
    players: []
};

const HomeReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case REQUEST_PLAYERS: {
            return {
                ...state,
                players: [],
                isLoading: true
            }
        }
        case RECEIVE_PLAYERS: {
            const {players} = action;
            return {
                ...state,
                players,
                isLoading: false

            }
        }
        default:
            return state;
    }
};

export default HomeReducer;