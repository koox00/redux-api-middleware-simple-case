import { RSAA } from "redux-api-middleware";

const fetchData = (user) => {
  return {
    [RSAA]: {
        method: "GET",
        endpoint: `https://api.github.com/users/${user}`,
        types: [
            'REQUEST',
            'SUCCESS',
            'FAILURE'
        ]
    }
  };
};

export const loadData = (user) => dispatch => dispatch(fetchData(user));
