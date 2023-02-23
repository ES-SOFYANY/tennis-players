const REQUEST_PLAYERS = 'REQUEST_PLAYERS';
const RECEIVE_PLAYERS = 'RECEIVE_PLAYERS';

function requestPlayersData() {
    return async (dispatch) => {
        dispatch({
            type: REQUEST_PLAYERS
        });
        const result = await fetch("http://localhost:3001/players").then(response => response.json());
        dispatch({
            type: RECEIVE_PLAYERS,
            players: result
        });

    };
}

export default {
    requestPlayersData
}